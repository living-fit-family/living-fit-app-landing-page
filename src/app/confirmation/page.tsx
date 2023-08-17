export default function Confirmation() {
  return (
  <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Your account has successfully been created.</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Please check your email to verify your account. Click the link below to download the Living Fit app.</p>
      <div className="mt-6 flex items-center justify-center gap-x-4">
        <a href="https://apps.apple.com/us/app/living-fit-family/id6457937962" title="Image from freepnglogos.com">
          <img src="/assets/images/appStore.png" width="123" alt="apple app store travel awards globestamp" />
        </a>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-4">
        <a href="/" className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Go back home</a>
      </div>
    </div>
  </main>
  )
} 
