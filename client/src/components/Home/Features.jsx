import React from 'react'

const Features = () => {
      const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

    // Adjust the threshold value to control the tilt effect
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };
    const handleClick=()=>{
        window.open("https://algo-rank-333.vercel.app/")
    }
    const handleClick1=()=>{
        window.open("https://algo-rank-333.vercel.app/")
    }
    const handleClick2=()=>{
        window.open("https://algo-rank-333.vercel.app/")
    }
  return (
  <>
   <div className='flex gap-9 justify-center  items-center justify-between'>
    <div onClick={handleClick} className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <img src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop"
                alt="City skyline" className="w-full h-52 object-cover"
            />
            <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
                CareerHub — DSA & Problem Solving
            </h3>
            <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">
                Practice Data Structures and Algorithms with curated problems, ranking systems, and performance tracking. Improve problem-solving skills through consistent practice and competitive learning.
            </p>
        </div>
         <div onClick={handleClick1} className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <img src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop"
                alt="City skyline" className="w-full h-52 object-cover"
            />
            <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
                CarreerHub — Smart Resume Builder
            </h3>
            <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">
                Build clean, professional, and ATS-friendly resumes in minutes. Customize templates, manage sections easily, and showcase your skills with confidence.
            </p>
        </div>
         <div onClick={handleClick2} className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <img src="https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=2000&auto=format&fit=crop"
                alt="City skyline" className="w-full h-52 object-cover"
            />
            <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
                CareerHub Interview Prep
            </h3>
            <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">
                Prepare for technical interviews with AI-driven mock interviews, real-world questions, and structured feedback. Practice coding interviews, system design basics, and behavioral rounds.
            </p>
        </div>
   </div>
  </>

  )
}

export default Features