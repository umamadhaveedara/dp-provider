<script>
    import Header from "../Components/Header.svelte";
    import { Label, Input } from "flowbite-svelte";
    import { Button } from "flowbite-svelte";
    let myPropValue = "Welcome Provider!";
  </script>
   
  <Header myProp={myPropValue} />
   
  <div class="flex flex-col items-center  bg-logobg pt-8">
    <div class="mb-3">
      <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold" 
        >Provider Type</Label
      >
      <select
        id="default-input"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2  opacity-70 pr-2"
      >
        <option value="" disabled selected>Select</option>
        <option value="Dental">Dental</option>
        <option value="Vision">Vision</option>
        <option value="Accupuncture">Accupuncture</option>
        <option value="Chiropractic">Chiropractic</option>
        <option value="Mental Health">Mental Health</option>
        <option value="Vet">Vet</option>
        <option value="Physical Therapy">Physical Therapy</option>
        <option value="Hospital">Hospital</option>
        <option value="Yoga">Yoga</option>
        <option value="Doctor Specialist">Doctor Specialist</option>
        <option value="Others">Others</option>
      </select>
    </div>
   
    <div class="mb-3">
      <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold"
        >First Name</Label
      >
      <Input
        id="default-input"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70"
        placeholder="Enter"
      />
    </div>
    <div class="mb-3">
      <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold"
        >Last Name</Label
      >
      <Input
        id="default-input"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70"
        placeholder="Enter"
      />
    </div>
    <div class="mb-5">
      <Label for="default-input" class="block mb-1 text-labelcolor font-Satoshi font-extrabold"
        >Practice Email</Label
      >
      <Input
        id="default-input"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70"
        placeholder="Enter"
      />
    </div>
   
    <div class="mb-8">
      <Button style="width:382px;" class="bg-loginbtn rounded-md font-bold"
        >Create Account</Button
      >
    </div>
    <ul>
      <li class="text-black text-xs mb-3 font-Satoshi">
        Have an account ?
        <a href="/" class="text-linkcolor font-extrabold"> Sign in now</a>
      </li>
    </ul>
  </div>