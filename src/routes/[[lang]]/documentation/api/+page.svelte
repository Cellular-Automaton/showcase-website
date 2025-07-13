<script lang="ts">
  import { page } from '$app/state';
  import { languages, isOfLangType } from '$lib/constants/languages/home';
  import type { Languages } from '$lib/constants/languages/home';
  import Sidebar from '$lib/Sidebar.svelte';
  import { error } from '@sveltejs/kit';

  if (!isOfLangType(page.params?.lang as Languages)) {
    throw error(400);
  }

  let string = `

<h1 id="documentation-plugin-implementation">Documentation Plugin
implementation:</h1>
<h2 id="plugin-explaination">0/ Plugin Explaination:</h2>
<pre><code>Our program design on the cellular automaton part correspond to the plug and play phylosophy. For us plugins are native nodejs addon created in other language (for now only c++). And used
to run the cellular automaton simulation. Our goal is to make the environment as easy as possible to implement your own cellular automaton, to be able to download and use other creation as well. To achieve this goal we have created some documentation to facilitate plugin creation and we are thinking about implementation in other language such as python or rust. We also want to create a custom library that would support our program and the plugin creation much more.</code></pre>
<h2 id="requirement">1/ Requirement:</h2>
<p>To be able to add your plugin to our program you will need to use
nodejs, cmake and Napi(node addon api). <a
href="https://github.com/nodejs/node-addon-api">(https://github.com/nodejs/node-addon-api)</a></p>
<h2 id="setting-up">2/ Setting up:</h2>
<p>(this is a quick summary of this <a
href="https://gauriatiq.medium.com/c-native-addon-independent-of-node-js-version-using-napi-node-addon-api-and-cmake-53315582cbd1">guide</a>.)</p>
<ul>
<li>Create a node-js project:</li>
</ul>
<div class="sourceCode" id="cb2"><pre
class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">$</span><span class="op">&gt;</span> npm <span class="ex">init</span></span></code></pre></div>
<ul>
<li>Install node-addon-api and cmakejs using npm:</li>
</ul>
<div class="sourceCode" id="cb3"><pre
class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ex">$</span><span class="op">&gt;</span> npm <span class="fu">install</span> node-addon-api <span class="at">--save</span></span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a><span class="ex">$</span><span class="op">&gt;</span> npm <span class="fu">install</span> cmake-js <span class="at">--save-dev</span></span></code></pre></div>
<ul>
<li>Add this to your package.json</li>
</ul>
<div class="sourceCode" id="cb4"><pre
class="sourceCode json"><code class="sourceCode json"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="er">&quot;scripts&quot;:</span> <span class="fu">{</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>  <span class="dt">&quot;install&quot;</span><span class="fu">:</span> <span class="st">&quot;cmake-js compile&quot;</span></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="fu">}</span><span class="er">,</span></span></code></pre></div>
<p>Then you can start create the program to build your native addon.</p>
<h2 id="program">3/Program</h2>
<h3 id="cmake">0/ Cmake:</h3>
<div class="sourceCode" id="cb5"><pre
class="sourceCode cmake"><code class="sourceCode cmake"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="kw">cmake_minimum_required</span>(<span class="ot">VERSION</span> <span class="dt">3.15</span>)</span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="kw">cmake_policy</span>(<span class="ot">SET</span> <span class="ot">CMP0091</span> <span class="ot">NEW</span>)</span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="kw">cmake_policy</span>(<span class="ot">SET</span> <span class="ot">CMP0042</span> <span class="ot">NEW</span>)</span>
<span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a><span class="kw">project</span> (addon)</span>
<span id="cb5-6"><a href="#cb5-6" aria-hidden="true" tabindex="-1"></a><span class="kw">set</span>(<span class="dv">CMAKE_CXX_STANDARD</span> 20)</span>
<span id="cb5-7"><a href="#cb5-7" aria-hidden="true" tabindex="-1"></a><span class="kw">set</span>(<span class="dv">CMAKE_CXX_STANDARD_REQUIRED</span> <span class="ot">ON</span>)</span>
<span id="cb5-8"><a href="#cb5-8" aria-hidden="true" tabindex="-1"></a><span class="kw">set</span>(<span class="dv">CMAKE_EXPORT_COMPILE_COMMANDS</span> 1)</span>
<span id="cb5-9"><a href="#cb5-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-10"><a href="#cb5-10" aria-hidden="true" tabindex="-1"></a><span class="kw">include_directories</span>(<span class="dv">\${CMAKE_JS_INC}</span>)</span>
<span id="cb5-11"><a href="#cb5-11" aria-hidden="true" tabindex="-1"></a><span class="kw">include_directories</span>(include/)</span>
<span id="cb5-12"><a href="#cb5-12" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-13"><a href="#cb5-13" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-14"><a href="#cb5-14" aria-hidden="true" tabindex="-1"></a><span class="kw">add_library</span>(<span class="dv">\${PROJECT_NAME}</span> <span class="bn">SHARED</span></span>
<span id="cb5-15"><a href="#cb5-15" aria-hidden="true" tabindex="-1"></a>    path/to/src</span>
<span id="cb5-16"><a href="#cb5-16" aria-hidden="true" tabindex="-1"></a>    <span class="dv">\${CMAKE_JS_SRC}</span></span>
<span id="cb5-17"><a href="#cb5-17" aria-hidden="true" tabindex="-1"></a>)</span>
<span id="cb5-18"><a href="#cb5-18" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-19"><a href="#cb5-19" aria-hidden="true" tabindex="-1"></a><span class="kw">set_target_properties</span>(<span class="dv">\${PROJECT_NAME}</span> <span class="ot">PROPERTIES</span> <span class="ot">PREFIX</span> <span class="st">&quot;&quot;</span> <span class="ot">SUFFIX</span> <span class="st">&quot;.node&quot;</span>)</span>
<span id="cb5-20"><a href="#cb5-20" aria-hidden="true" tabindex="-1"></a><span class="kw">target_link_libraries</span>(<span class="dv">\${PROJECT_NAME}</span> <span class="dv">\${CMAKE_JS_LIB}</span>)</span>
<span id="cb5-21"><a href="#cb5-21" aria-hidden="true" tabindex="-1"></a><span class="kw">execute_process</span>(<span class="ot">COMMAND</span> node -p <span class="st">&quot;require(&#39;node-addon-api&#39;).include&quot;</span></span>
<span id="cb5-22"><a href="#cb5-22" aria-hidden="true" tabindex="-1"></a>        <span class="ot">WORKING_DIRECTORY</span> <span class="dv">\${CMAKE_SOURCE_DIR}</span></span>
<span id="cb5-23"><a href="#cb5-23" aria-hidden="true" tabindex="-1"></a>        <span class="ot">OUTPUT_VARIABLE</span> NODE_ADDON_API_DIR</span>
<span id="cb5-24"><a href="#cb5-24" aria-hidden="true" tabindex="-1"></a>        )</span>
<span id="cb5-25"><a href="#cb5-25" aria-hidden="true" tabindex="-1"></a><span class="kw">string</span>(<span class="ot">REPLACE</span> <span class="st">&quot;</span><span class="sc">\n</span><span class="st">&quot;</span> <span class="st">&quot;&quot;</span> NODE_ADDON_API_DIR <span class="dv">\${NODE_ADDON_API_DIR}</span>)</span>
<span id="cb5-26"><a href="#cb5-26" aria-hidden="true" tabindex="-1"></a><span class="kw">string</span>(<span class="ot">REPLACE</span> <span class="st">&quot;</span><span class="sc">\&quot;</span><span class="st">&quot;</span> <span class="st">&quot;&quot;</span> NODE_ADDON_API_DIR <span class="dv">\${NODE_ADDON_API_DIR}</span>)</span>
<span id="cb5-27"><a href="#cb5-27" aria-hidden="true" tabindex="-1"></a><span class="kw">target_include_directories</span>(<span class="dv">\${PROJECT_NAME}</span> <span class="bn">PRIVATE</span> <span class="dv">\${NODE_ADDON_API_DIR}</span>)</span>
<span id="cb5-28"><a href="#cb5-28" aria-hidden="true" tabindex="-1"></a><span class="kw">target_include_directories</span>(<span class="dv">\${PROJECT_NAME}</span></span>
<span id="cb5-29"><a href="#cb5-29" aria-hidden="true" tabindex="-1"></a>    <span class="bn">PUBLIC</span></span>
<span id="cb5-30"><a href="#cb5-30" aria-hidden="true" tabindex="-1"></a>    path/to/include</span>
<span id="cb5-31"><a href="#cb5-31" aria-hidden="true" tabindex="-1"></a>)</span>
<span id="cb5-32"><a href="#cb5-32" aria-hidden="true" tabindex="-1"></a><span class="kw">add_definitions</span>(-<span class="dv">DNAPI_VERSION</span>=4)</span></code></pre></div>
<h3 id="create-a-header-file-with-this">1. Create a header file with
this:</h3>
<div class="sourceCode" id="cb6"><pre
class="sourceCode cpp"><code class="sourceCode cpp"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="pp">#include </span><span class="im">&lt;napi.h&gt;</span></span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a>Napi<span class="op">::</span>Array wrap_simulate<span class="op">(</span><span class="at">const</span> Napi<span class="op">::</span>CallbackInfo<span class="op">&amp;</span> info<span class="op">);</span></span>
<span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a>Napi<span class="op">::</span>Number wrap_get_params<span class="op">(</span><span class="at">const</span> Napi<span class="op">::</span>CallbackInfo<span class="op">&amp;</span> info<span class="op">);</span></span>
<span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb6-6"><a href="#cb6-6" aria-hidden="true" tabindex="-1"></a>Napi<span class="op">::</span>Object Init<span class="op">(</span>Napi<span class="op">::</span>Env env<span class="op">,</span> Napi<span class="op">::</span>Object exports<span class="op">);</span></span>
<span id="cb6-7"><a href="#cb6-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb6-8"><a href="#cb6-8" aria-hidden="true" tabindex="-1"></a>NODE_API_MODULE<span class="op">(</span>addon<span class="op">,</span> Init<span class="op">)</span></span></code></pre></div>
<h4 id="explaination">Explaination:</h4>
<ul>
<li><p>wrap_simulate and wrap_get_params are the functions where you are
going to “translate” your c++ object into nodsjs one. wrap_simulate is
where you return the simulate function of your automaton. You must
return one frame of your current simulation in any type of array of Napi
wrap_get_params is where you return the nodejs parameter of
wrap_simulate. You must return a Napi::Array with this format
{“param_name:nodejs_type”,…}</p></li>
<li><p>Init is the function that specify the import of your program. For
our case you’ll need a minimun 2 imports: “simulate” and “get_params”
NODE_API_MODULE() registers an add-on based on an initializer
function.</p></li>
</ul>
<h3 id="create-a-.cpp-file-with-this">2. Create a .cpp file with
this:</h3>
<div class="sourceCode" id="cb7"><pre
class="sourceCode cpp"><code class="sourceCode cpp"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a>Napi<span class="op">::</span>Array wrap_simulate<span class="op">(</span><span class="at">const</span> Napi<span class="op">::</span>CallbackInfo <span class="op">&amp;</span>info<span class="op">)</span></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="op">{</span></span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a>    Napi<span class="op">::</span>Env env <span class="op">=</span> info<span class="op">.</span>Env<span class="op">();</span></span>
<span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a>    <span class="co">//Put your simulation result in a Napi::Array of some kind and return it</span></span>
<span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a><span class="op">}</span></span>
<span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a>    </span>
<span id="cb7-8"><a href="#cb7-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-9"><a href="#cb7-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-10"><a href="#cb7-10" aria-hidden="true" tabindex="-1"></a>Napi<span class="op">::</span>Array wrap_get_params<span class="op">(</span><span class="at">const</span> Napi<span class="op">::</span>CallbackInfo <span class="op">&amp;</span>info<span class="op">)</span></span>
<span id="cb7-11"><a href="#cb7-11" aria-hidden="true" tabindex="-1"></a><span class="op">{</span></span>
<span id="cb7-12"><a href="#cb7-12" aria-hidden="true" tabindex="-1"></a>    Napi<span class="op">::</span>Env env <span class="op">=</span> info<span class="op">.</span>Env<span class="op">();</span></span>
<span id="cb7-13"><a href="#cb7-13" aria-hidden="true" tabindex="-1"></a>    <span class="bu">std::</span>array<span class="op">&lt;</span><span class="bu">std::</span>string<span class="op">,</span> <span class="dv">3</span><span class="op">&gt;</span> tmp<span class="op">{</span><span class="st">&quot;your_param:nodejs_type&quot;</span><span class="op">};</span></span>
<span id="cb7-14"><a href="#cb7-14" aria-hidden="true" tabindex="-1"></a>    Napi<span class="op">::</span>Array return_value <span class="op">=</span> Napi<span class="op">::</span>Array<span class="op">::</span>New<span class="op">(</span>env<span class="op">,</span> tmp<span class="op">.</span>size<span class="op">());</span></span>
<span id="cb7-15"><a href="#cb7-15" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> <span class="op">(</span><span class="dt">size_t</span> i<span class="op">{</span><span class="dv">0</span><span class="op">};</span> i <span class="op">&lt;</span> tmp<span class="op">.</span>size<span class="op">();</span> i<span class="op">++)</span></span>
<span id="cb7-16"><a href="#cb7-16" aria-hidden="true" tabindex="-1"></a>        return_value<span class="op">[</span>i<span class="op">]</span> <span class="op">=</span> Napi<span class="op">::</span>String<span class="op">::</span>New<span class="op">(</span>env<span class="op">,</span> tmp<span class="op">[</span>i<span class="op">]);</span></span>
<span id="cb7-17"><a href="#cb7-17" aria-hidden="true" tabindex="-1"></a>    <span class="cf">return</span> return_value<span class="op">;</span></span>
<span id="cb7-18"><a href="#cb7-18" aria-hidden="true" tabindex="-1"></a><span class="op">}</span></span>
<span id="cb7-19"><a href="#cb7-19" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-20"><a href="#cb7-20" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-21"><a href="#cb7-21" aria-hidden="true" tabindex="-1"></a>Napi<span class="op">::</span>Object Init<span class="op">(</span>Napi<span class="op">::</span>Env env<span class="op">,</span> Napi<span class="op">::</span>Object exports<span class="op">)</span> </span>
<span id="cb7-22"><a href="#cb7-22" aria-hidden="true" tabindex="-1"></a><span class="op">{</span></span>
<span id="cb7-23"><a href="#cb7-23" aria-hidden="true" tabindex="-1"></a>  exports<span class="op">.</span>Set<span class="op">(</span><span class="st">&quot;simulate&quot;</span><span class="op">,</span> Napi<span class="op">::</span>Function<span class="op">::</span>New<span class="op">(</span>env<span class="op">,</span> wrap_simulate<span class="op">));</span></span>
<span id="cb7-24"><a href="#cb7-24" aria-hidden="true" tabindex="-1"></a>  exports<span class="op">.</span>Set<span class="op">(</span><span class="st">&quot;get_params&quot;</span><span class="op">,</span> Napi<span class="op">::</span>Function<span class="op">::</span>New<span class="op">(</span>env<span class="op">,</span> wrap_get_params<span class="op">));</span></span>
<span id="cb7-25"><a href="#cb7-25" aria-hidden="true" tabindex="-1"></a>  <span class="cf">return</span> exports<span class="op">;</span></span>
<span id="cb7-26"><a href="#cb7-26" aria-hidden="true" tabindex="-1"></a><span class="op">}</span></span></code></pre></div>
<h4 id="explaination-1">Explaination:</h4>
<ul>
<li>wrap_simulate: Our program will give to this function the parameter
you specify in wrap_get_params with the type you put You can access the
parameters by doing
info[parameter_index].As<Napi::type_you_want>();</li>
</ul>
<div class="sourceCode" id="cb8"><pre
class="sourceCode cpp"><code class="sourceCode cpp"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a>            <span class="co">//(example)</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a>            Napi<span class="op">::</span>Number first_param <span class="op">=</span> info<span class="op">[</span><span class="dv">0</span><span class="op">].</span>As<span class="op">&lt;</span>Napi<span class="op">::</span>Number<span class="op">&gt;();</span></span></code></pre></div>
<ul>
<li>wrap_get_params: This function is needed for our program to be able
to call wrap_simulate by putting the right parameter. Otherwise we would
not be able to call the function.</li>
</ul>
  `;
</script>

<svelte:head>
  <title>CAMI - Documentation</title>
</svelte:head>

<Sidebar />
<div class="box">
  <p>
  {@html string}

  </p>
</div>

<style>
  .box {
    margin-left: 15vw;
    max-width: 80vw;
  }

  p {
    font-size: 2vh;
    color: white;
  }
</style>
