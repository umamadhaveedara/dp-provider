<script>
import Header from "../Components/Header.svelte";
import { Label, Input } from 'flowbite-svelte';
import { Button } from 'flowbite-svelte';
import axios from '../Utils/axiosinterceptors';
import { Spinner } from 'flowbite-svelte';
let myPropValue = "Welcome";
let email = '';
let password = '';
let isloading= false;

async function handleLogin() {
    const data = { 
      email, 
      loginType:"web",
      password 
    };
    isloading=true
    try {
      const response = await axios.post('/user/login', data);

      if (response.ok) {
        const responseData = await response.json();
        isloading=false
        console.log(responseData); 
      } else {
        const errorData = await response.json();
        isloading=false
        console.error(errorData); 
      }
    } catch (error) {
      isloading=false
      console.error('Error:', error);
    }
  }
</script>
<Header myProp={myPropValue}/>

<!-- <div class=" bg-logobg "> -->
  <div class="relative ">
    {#if isloading}
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div style="width: 80px; height: 80px;">
        <Spinner class="text-white" style="width: 50px; height: 50px;" />
      </div>
    </div>
    {/if}
   
<form class="flex flex-col items-center pt-8 " on:submit|preventDefault={handleLogin}>
    <div class="mb-3 ">
        <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold">Enter Email</Label>
        <Input id="default-input" style="width:382px; height:40px; font-size:large" bind:value={email} class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70" placeholder="Email" />
      </div>
      <div class="mb-8">
        <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold">Enter Password</Label>
        <Input id="default-input" type='password' style="width:382px; height:40px; font-size:large" bind:value={password} class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70" placeholder="****" />
      </div>
      <div class="mb-6">
        <Button type='submit' style="width:382px;" class="bg-loginbtn rounded-md font-bold">Login</Button>
      </div>
      <ul>
        <li class="text-black text-xs mb-4 font-Satoshi ">Don't have an account?  <a href="/signup" class="text-linkcolor font-extrabold"> Signup</a></li>
        <li class="text-black text-xs text-center font-Satoshi"> <a href="/forgotpassword" class="text-linkcolor font-extrabold">Forgot Password?</a></li>
        </ul>
</form>
</div>
<!-- </div> -->