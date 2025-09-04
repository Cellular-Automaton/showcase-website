<script lang="ts">
  import { page } from '$app/state';
  import { isOfLangType } from '$lib/constants/languages/home';
  import type { Languages } from '$lib/constants/languages/home';
  import Sidebar from '$lib/Sidebar.svelte';
  import { error } from '@sveltejs/kit';
  import 'prismjs';

  if (!isOfLangType(page.params?.lang as Languages)) {
    throw error(400);
  }
</script>

<svelte:head>
  <title>CAMI - Documentation</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-okaidia.min.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-bash.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-json.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-cmake.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-cpp.min.js"></script>
</svelte:head>

<Sidebar />
<div class="box">
  <h1>Documentation Plugin implementation</h1>
  <div class="paragraph">
    <h2>0/ Plugin Explaination:</h2>
    <p>
      Our program design on the cellular automaton part correspond to the plug and play phylosophy. For us plugins are native nodejs addon created in
      other language (for now only c++). And used to run the cellular automaton simulation. Our goal is to make the environment as easy as possible to
      implement your own cellular automaton, to be able to download and use other creation as well. To achieve this goal we have created some
      documentation to facilitate plugin creation and we are thinking about implementation in other language such as python or rust. We also want to
      create a custom library that would support our program and the plugin creation much more.
    </p>
  </div>
  <div class="paragraph">
    <h2 id="requirement">1/ Requirement:</h2>
    <p>
      To be able to add your plugin to our program you will need to use nodejs, cmake and Napi <a
        href="https://github.com/nodejs/node-addon-api"
        target="_blank">(node addon api)</a
      >.
    </p>
  </div>
  <div class="paragraph">
    <h2 id="setting-up">2/ Setting up:</h2>
    <p>
      (this is a quick summary of this <a
        href="https://gauriatiq.medium.com/c-native-addon-independent-of-node-js-version-using-napi-node-addon-api-and-cmake-53315582cbd1"
        target="_blank">guide</a
      >.)
    </p>

    <ul style="list-style-type:circle">
      <li>
        <p>Create a node-js project:</p>
        <pre><code class="language-bash">$> npm init</code></pre>
      </li>
      <li>
        <p>Install node-addon-api and cmakejs using npm:</p>
        <pre><code class="language-bash"
            >{`
$> npm install node-addon-api --save
$> npm install cmake-js --save-dev
`.trim()}</code
          ></pre>
      </li>
      <li>
        <p>Add this to your package.json</p>
        <pre><code class="language-json"
            >{`
"scripts": {
  "install": "cmake-js compile"
},
          `.trim()}</code
          ></pre>
      </li>
    </ul>
    <p>Then you can start create the program to build your native addon.</p>
  </div>
  <div class="paragraph">
    <h2>3/Program</h2>

    <h3>0/ Cmake:</h3>
    <pre><code class="language-cmake"
        >{`
cmake_minimum_required(VERSION 3.15)
cmake_policy(SET CMP0091 NEW)
cmake_policy(SET CMP0042 NEW)

project (addon)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS 1)

include_directories(\${CMAKE_JS_INC})
include_directories(include/)


add_library(\${PROJECT_NAME} SHARED
    path/to/src
    \${CMAKE_JS_SRC}
)

set_target_properties(\${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")
target_link_libraries(\${PROJECT_NAME} \${CMAKE_JS_LIB})
execute_process(COMMAND node -p "require('node-addon-api').include"
        WORKING_DIRECTORY \${CMAKE_SOURCE_DIR}
        OUTPUT_VARIABLE NODE_ADDON_API_DIR
        )
string(REPLACE "\n" "" NODE_ADDON_API_DIR \${NODE_ADDON_API_DIR})
string(REPLACE "\"" "" NODE_ADDON_API_DIR \${NODE_ADDON_API_DIR})
target_include_directories(\${PROJECT_NAME} PRIVATE \${NODE_ADDON_API_DIR})
target_include_directories(\${PROJECT_NAME}
    PUBLIC
    path/to/include
)
add_definitions(-DNAPI_VERSION=4)
`.trim()}</code
      ></pre>

    <h3>1/ Create a header file with this:</h3>
    <pre><code class="language-cpp"
        >{`
#include <napi.h>

Napi::Array wrap_simulate(const Napi::CallbackInfo& info);
Napi::Number wrap_get_params(const Napi::CallbackInfo& info);

Napi::Object Init(Napi::Env env, Napi::Object exports);

NODE_API_MODULE(addon, Init)
`.trim()}</code
      ></pre>
    <ul style="list-style-type:circle">
      <li>
        wrap_simulate and wrap_get_params are the functions where you are going to "translate" your c++ object into nodsjs one. wrap_simulate is where
        you return the simulate function of your automaton. You must return one frame of your current simulation in any type of array of Napi<br />
        wrap_get_params is where you return the nodejs parameter of wrap_simulate. You must return a Napi::Array with this format
        <code class="language-json">&lbrace;"param_name:nodejs_type", &#8230;&rbrace;</code>
      </li>
      <li>
        Init is the function that specify the import of your program. For our case you'll need a minimun 2 imports: "simulate" and "get_params"
        NODE_API_MODULE() registers an add-on based on an initializer function.
      </li>
    </ul>

    <h3>2/ Create a .cpp file with this:</h3>
    <pre><code class="language-cpp"
        >{`
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
`.trim()}</code
      ></pre>
    <ul style="list-style-type:circle">
      <li>
        wrap_simulate:<br />
        Our program will give to this function the parameter you specify in wrap_get_params with the type you put You can access the parameters by doing
        <code class="language-cpp">info[parameter_index].As&lt;Napi::type_you_want&gt;()</code>;
        <pre><code class="language-cpp"
            >{`
//(example)
Napi::Number first_param = info[0].As<Napi::Number>();`.trim()}</code
          ></pre>
      </li>
      <li>
        wrap_get_params:<br />
        This function is needed for our program to be able to call wrap_simulate by putting the right parameter. Otherwise we would not be able to call
        the function.
      </li>
    </ul>
  </div>
</div>

<style>
  @import '../../../../global.css';
  h1 {
    color: theme('colors.primary.500');
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 2vh;
  }

  h2 {
    color: theme('colors.primary.400');
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h3 {
    color: theme('colors.primary.400');
    opacity: 0.8;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    font-size: 2vh;
    color: theme('colors.primary.50');
    opacity: 0.8;
  }
  li {
    font-size: 2vh;
    color: theme('colors.primary.50');
    opacity: 0.8;
  }

  a {
    color: theme('colors.primary.500');
  }
  pre {
    white-space: pre-wrap;
  }

  .box {
    margin-left: 15vw;
    max-width: 80vw;
  }

  .paragraph {
    gap: 1vh;
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
</style>
