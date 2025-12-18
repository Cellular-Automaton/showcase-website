# Documentation plugin implementation

## 0/ Plugin Explanation

    Our program design on the cellular automaton part correspond to the plug and play phylosophy. For us plugins are native nodejs addon created in other language (for now only c++). And used
    to run the cellular automaton simulation. Our goal is to make the environment as easy as possible to implement your own cellular automaton, to be able to download and use other creation as well. To achieve this goal we have created some documentation to facilitate plugin creation and we are thinking about implementation in other language such as python or rust. We also want to create a custom library that would support our program and the plugin creation much more.

## 1/ Requirement

To be able to add your plugin to our program you will need to use nodejs, cmake and Napi(node addon api).
[(https://github.com/nodejs/node-addon-api)](https://github.com/nodejs/node-addon-api)

## 2/ Setting up

(this is a quick summary of this [guide](https://gauriatiq.medium.com/c-native-addon-independent-of-node-js-version-using-napi-node-addon-api-and-cmake-53315582cbd1).)

- Create a node-js project:

```bash
$> npm init
```

- Install node-addon-api and cmakejs using npm:

```bash
$> npm install node-addon-api --save
$> npm install cmake-js --save-dev
```

- Add this to your package.json

```json
"scripts": {
  "install": "cmake-js compile"
},
```

Then you can start create the program to build your native addon.

## 3/Program

### 0/ CMake

```cmake
cmake_minimum_required(VERSION 3.15)
cmake_policy(SET CMP0091 NEW)
cmake_policy(SET CMP0042 NEW)

project (addon)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS 1)

include_directories(${CMAKE_JS_INC})
include_directories(include/)


add_library(${PROJECT_NAME} SHARED
    path/to/src
    ${CMAKE_JS_SRC}
)

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB})
execute_process(COMMAND node -p "require('node-addon-api').include"
        WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
        OUTPUT_VARIABLE NODE_ADDON_API_DIR
        )
string(REPLACE "\n" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
string(REPLACE "\"" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
target_include_directories(${PROJECT_NAME} PRIVATE ${NODE_ADDON_API_DIR})
target_include_directories(${PROJECT_NAME}
    PUBLIC
    path/to/include
)
add_definitions(-DNAPI_VERSION=4)
```

### 1. Create a header file with this

```c++
#include <napi.h>

Napi::Array wrap_simulate(const Napi::CallbackInfo& info);
Napi::Number wrap_get_params(const Napi::CallbackInfo& info);

Napi::Object Init(Napi::Env env, Napi::Object exports);

NODE_API_MODULE(addon, Init)
```

#### Explaination

- wrap_simulate and wrap_get_params are the functions where you are going to "translate" your c++ object into nodsjs one.
  wrap_simulate is where you return the simulate function of your automaton.
  You must return one frame of your current simulation in any type of array of Napi
  wrap_get_params is where you return the nodejs parameter of wrap_simulate.
  You must return a Napi::Array with this format `{"param_name:nodejs_type",...}`
- Init is the function that specify the import of your program.
  For our case you'll need a minimun of 2 imports:
  "simulate" and "get_params"
  NODE_API_MODULE() registers an add-on based on an initializer function.

### 2. Create a .cpp file with this

```c++

Napi::Array wrap_simulate(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    //Put your simulation result in a Napi::Array of some kind and return it
}



Napi::Array wrap_get_params(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    std::array<std::string, 3> tmp{"your_param:nodejs_type"};
    Napi::Array return_value = Napi::Array::New(env, tmp.size());
    for (size_t i{0}; i < tmp.size(); i++)
        return_value[i] = Napi::String::New(env, tmp[i]);
    return return_value;
}


Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  exports.Set("simulate", Napi::Function::New(env, wrap_simulate));
  exports.Set("get_params", Napi::Function::New(env, wrap_get_params));
  return exports;
}
```

#### Explanation

- wrap_simulate:
  Our program will give to this function the parameter you specify in wrap_get_params with the type you put
  You can access the parameters by doing `info[parameter_index].As<Napi::type_you_want>();`

```c++
//(example)
Napi::Number first_param = info[0].As<Napi::Number>();
```

- wrap_get_params:
  This function is needed for our program to be able to call wrap_simulate by putting the right parameter.
  Otherwise we would not be able to call the function.
