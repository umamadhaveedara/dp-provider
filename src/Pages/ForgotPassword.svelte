<script>
    import Header from "../Components/Header.svelte";
    import { Label, Input } from "flowbite-svelte";
    import { Button } from "flowbite-svelte";
    let myPropValue = "Forgot Password";
  </script>
   
  <Header myProp={myPropValue} />
   
  <div class="flex flex-col items-center bg-logobg pt-4">
    <div class="mb-9">
      <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold"
        >Enter Email</Label
      >
      <Input
        id="default-input"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70"
        placeholder="Email"
      />
    </div>
    <div class="mb-8">
      <Button style="width:382px;" class="bg-loginbtn rounded-md font-bold">Reset</Button>
    </div>
    <ul>
      <li class="text-black text-xs mb-3 font-Satoshi ">
          Have an account ? <a href="/" class="text-linkcolor font-extrabold">
          Sign in now</a
        >
      </li>
    </ul>
  </div>