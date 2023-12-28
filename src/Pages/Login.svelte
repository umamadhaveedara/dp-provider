<script>
import Header from "../Components/Header.svelte";
import { Label, Input } from 'flowbite-svelte';
import { Button } from 'flowbite-svelte';
let myPropValue = "Welcome";

</script>
<Header myProp={myPropValue}/>

<!-- <div class=" bg-logobg "> -->
<div class="flex flex-col items-center pt-8 ">
    <div class="mb-3 ">
        <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold">Enter Email</Label>
        <Input id="default-input" style="width:382px; height:40px; font-size:large" class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70" placeholder="Email" />
      </div>
      <div class="mb-8">
        <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold">Enter Password</Label>
        <Input id="default-input" type='password' style="width:382px; height:40px; font-size:large" class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70" placeholder="****" />
      </div>
      <div class="mb-6">
        <Button style="width:382px;" class="bg-loginbtn rounded-md font-bold">Login</Button>
      </div>
      <ul>
        <li class="text-black text-xs mb-4 font-Satoshi ">Don't have an account?  <a href="/signup" class="text-linkcolor font-extrabold"> Signup</a></li>
        <li class="text-black text-xs text-center font-Satoshi"> <a href="/forgotpassword" class="text-linkcolor font-extrabold">Forgot Password?</a></li>
        </ul>
</div>

<!-- </div> -->