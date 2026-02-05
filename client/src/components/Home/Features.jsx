import React from 'react'

const Features = () => {
      const [tilt1, setTilt1] = React.useState({ x: 0, y: 0 });
      const [tilt2, setTilt2] = React.useState({ x: 0, y: 0 });
      const [tilt3, setTilt3] = React.useState({ x: 0, y: 0 });

    // Adjust the threshold value to control the tilt effect
    const threshold = 15;

    const handleMove = (e, setTilt) => {
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
   <div className='grid grid-cols-3 gap-9 justify-center p-12 bg-gradient-to-b from-white to-slate-50 items-stretch'>
    <div onClick={handleClick} className="rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 ease-out cursor-pointer bg-white border border-slate-100 hover:border-indigo-200"
            onMouseMove={(e) => handleMove(e, setTilt1)}
            onMouseLeave={() => setTilt1({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt1.x}deg) rotateY(${tilt1.y}deg)` }}
        >
            <img src="https://images.unsplash.com/photo-1514432324607-2e4c00c3d881?q=80&w=2000&auto=format&fit=crop"
                alt="DSA & Problem Solving" className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  CareerHub DSA
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                  Practice Data Structures and Algorithms with curated problems, ranking systems, and performance tracking. Improve problem-solving skills through consistent practice and competitive learning.
              </p>
            </div>
        </div>
         <div onClick={handleClick1} className="rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 ease-out cursor-pointer bg-white border border-slate-100 hover:border-indigo-200"
            onMouseMove={(e) => handleMove(e, setTilt2)}
            onMouseLeave={() => setTilt2({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt2.x}deg) rotateY(${tilt2.y}deg)` }}
        >
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
                alt="Smart Resume Builder" className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  CareerHub Resume
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                  Build clean, professional, and ATS-friendly resumes in minutes. Customize templates, manage sections easily, and showcase your skills with confidence.
              </p>
            </div>
        </div>
         <div onClick={handleClick2} className="rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 ease-out cursor-pointer bg-white border border-slate-100 hover:border-indigo-200"
            onMouseMove={(e) => handleMove(e, setTilt3)}
            onMouseLeave={() => setTilt3({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt3.x}deg) rotateY(${tilt3.y}deg)` }}
        >
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
                alt="Interview Preparation" className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  CareerHub Interview
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                  Prepare for technical interviews with AI-driven mock interviews, real-world questions, and structured feedback. Practice coding interviews, system design basics, and behavioral rounds.
              </p>
            </div>
        </div>
   </div>
  </>

  )
}

export default Features