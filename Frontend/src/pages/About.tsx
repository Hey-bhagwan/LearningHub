

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">About</h1>
      <p>
        This project is made for college purpose on a website 
        which provides a platform to students to organise there courses.
      </p>
      <p className="italic">Made by <b>Ayush Upadhyay,Manish Kumar and Ashish Verma</b></p>
      <a href="/Dashboard">
        <button className="bg-primary-button text-white p-2 rounded-lg mt-4">Go to Dashboard</button>
      </a>
    </div>
  )
}