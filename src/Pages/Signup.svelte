<script>
  import Header from "../Components/Header.svelte";
  import { Label, Input } from "flowbite-svelte";
  import { Button } from "flowbite-svelte";
  import { apiUrl } from "../Utils/api";
  let myPropValue = "Welcome Provider!";

  let type = "";
  let providerFirstName = "";
  let providerLastName = "";
  let email = "";

  async function handleLogin() {
    const data = { type, providerFirstName, providerLastName, email };

    try {
      const response = await fetch(`${apiUrl}/mybenefitsprovider/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        type = "";
        providerFirstName = "";
        providerLastName = "";
        email = "";
        console.log(responseData);
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<Header myProp={myPropValue} />

<div class="flex flex-col items-center bg-logobg pt-8">
  <form on:submit|preventDefault={handleLogin}>
    <div class="mb-3">
      <Label
        for="provider-type"
        class="block mb-1 text-labelcolor font-Satoshi font-extrabold"
        >Provider Type</Label
      >
      <select
        id="provider-type"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2 opacity-70 pr-2"
        bind:value={type}
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
      <Label
        for="first-name"
        class="block mb-1 text-labelcolor font-Satoshi font-extrabold"
        >First Name</Label
      >
      <Input
        id="first-name"
        type="text"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70"
        placeholder="Enter"
        bind:value={providerFirstName}
      />
    </div>

    <div class="mb-3">
      <Label
        for="last-name"
        class="block mb-1 text-labelcolor font-Satoshi font-extrabold"
        >Last Name</Label
      >
      <Input
        id="last-name"
        type="text"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70"
        placeholder="Enter"
        bind:value={providerLastName}
      />
    </div>

    <div class="mb-5">
      <Label
        for="practice-email"
        class="block mb-1 text-labelcolor font-Satoshi font-extrabold"
        >Practice Email</Label
      >
      <Input
        id="practice-email"
        type="email"
        style="width:382px; height:40px; font-size:large"
        class="bg-white text-black border-bordercolor border pl-2 placeholder-black opacity-70"
        placeholder="Enter"
        bind:value={email}
      />
    </div>

    <div class="mb-8">
      <Button style="width:382px;" class="bg-loginbtn rounded-md font-bold"
        >Create Account</Button
      >
    </div>
  </form>

  <ul>
    <li class="text-black text-xs mb-3 font-Satoshi">
      Have an account ?
      <a href="/" class="text-linkcolor font-extrabold"> Sign in now</a>
    </li>
  </ul>
</div>
