import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, BookOpen, Code, Briefcase, User, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-blue-100 shadow-sm fixed-top width-100%">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold font-serif text-gray-800">Latchupatula Tirumalaprasad</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-800 hover:text-blue-900 hover:underline underline-offset-4 transition-all duration-200 linear">About</a>
            <a href="#education" className="text-gray-800 hover:text-blue-900 hover:underline underline-offset-4 transition-all duration-200 linear">Education</a>
            <a href="#Skills" className="text-gray-800 hover:text-blue-900 hover:underline underline-offset-4 transition-all duration-200 linear">Skills</a>
            <a href="#projects" className="text-gray-800 hover:text-blue-900 hover:underline underline-offset-4 transition-all duration-200 linear">Projects</a>
            <a href="#experience" className="text-gray-800 hover:text-blue-900 hover:underline underline-offset-4 transition-all duration-200 linear">Internships</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Electronics and Communication Engineering</h2>
            <p className="text-lg text-gray-600 mb-8">Passionate about building innovative solutions and learning new technologies. Recently completed my Graduation at Aditya Engineering College.</p>
            <div className="flex flex-wrap gap-4">
              {/* <a href="#" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={20} /> Download CV
              </a> */}
              <div className="flex gap-4">
                <a href="https://github.com/20A91A04M5" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 hover:text-gray-900 hover:bg-blue-100 rounded-full transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/tirumala-prasad-latchupatula" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 hover:text-gray-900 hover:bg-blue-100 rounded-full transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:tirumalaprasad0333@gmail.com" className="p-3 text-gray-600 hover:text-gray-900 hover:bg-blue-100 rounded-full transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600" 
              alt="Profile" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            I am an ambitious and adaptable graduate with a Bachelor's degree in Electronics and Communication Engineering.
            Possessing strong interpersonal skills and a passion to work towards your organization, I am eager to kick start my career and contribute
            positively to a forward-thinking in organization, With a solid foundation in Python Programming Language, HTML, CSS, Bootstrap, Javascript, NodeJs, ExpressJs and MySQL coupled with internships at the Airport Authority of India and Microsoft Azure, I am equipped with the skills necessary
            to thrive in a professional environment. Seeking an entry-level position where I can apply my knowledge, learn new skills, and
            grow both personally and professionally.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">Electronics and Communication Engineering</h3>
            <p className="text-gray-600">Aditya Engineering College</p>
            <p className="text-gray-500">2020 - 2024</p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>CGPA: 8.12/10.0</li>
            </ul>
          </div>
        </div>
      </section>

       {/* Technical Skills */}
      <section>
         <div id="Skills" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Python', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ReactJs', 'Node.js', 'Express.js', 'Git','GitHub', 'MySQL', 'Microst Azure'].map((skill) => (
              <div key={skill} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
      
      

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Code className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Monitoring System using CANSAT (Can-size Satellite)</h3>
              <p className="text-gray-600 mb-4">
                Developed a can-sized satellite to measure temperature and humidity in surrounding environments.
                Used embedded C and Arduino UNO for implementation. Responsible for testing, modification, and team collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Arduino UNO</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Embedded C</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">IoT</span>
              </div>
              {/* <a href="#" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700">
                View Project <ExternalLink size={16} />
              </a> */}
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">POP Design</h3>
              <p className="text-gray-600 mb-4">
                Developed a pop up design that it could benefit from additional information about the team and their services, as well as some interactive elements to enhance the user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Bootstrap</span>
              </div>
              <a href="https://20a91a04m5.github.io/Project_h-c/" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700">
                View Project <ExternalLink size={16} />
              </a>
            </div>

             <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Meditation App</h3>
              <p className="text-gray-600 mb-4">
                Developed a user-friendly Meditation App enabling clients to practice meditation through time-based sessions and 
soothing music, enhancing relaxation and mindfulness. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Bootstrap</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">JavaScript</span>
              </div>
              <a href="https://20a91a04m5.github.io/Meditation_App/" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700">
                View Project <ExternalLink size={16} />
              </a>
            </div>
          
                       <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">NFX GYM APP</h3>
              <p className="text-gray-600 mb-4">
                Developed a full-stack gym management app for workouts, diet plans, and progress with a user-friendly interface and secure authentication.
                Enabled users to log workouts and track meal plans with real-time updates.Built REStful APIs using Node.js and Express.js to handle user data 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Bootstrap</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">React.Js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Node.Js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Express.Js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">MySQL</span>
              </div>
              <a href="https://nfx-frc.vercel.app/" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700">
                View Project <ExternalLink size={16} />
              </a>
            </div>


            
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="experience" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-900">Internships</h2>
          </div>
          <div className="space-y-6">

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Airport Authority of India Internship</h3>
              <p className="text-gray-600">Rajahmundary Airport</p>
              <p className="text-gray-500">2023</p>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Gained hands-on experience with airport communication systems.</li>
                <li>Studied radar and navigation equipment operations.</li>
                <li>Participated in system maintenance and troubleshooting.</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Microsoft Azure Internship</h3>
              <p className="text-gray-600">Aditya Engineering College</p>
              <p className="text-gray-500">Summer-2023</p>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Learned cloud infrastructure and deployment practices.</li>
                <li>Worked with Azure services and cloud solutions.</li>
                <li>Gainedexperienceonvirtual machines and virtual networking.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">MERN STACK</h3>
              <p className="text-gray-600">10000 Coders</p>
              <p className="text-gray-500">2024</p>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Gained hands-on experience with MERN Stack Skills.</li>
                <li>Studied About different Mern related Technologies.</li>
                <li>Done few Projects related to MERN stack.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Latchupatula Tirumalaprasad</h3>
              <h3 className="text-xl font-bold mb-2">+916302394467</h3>
              <h3 className="text-xl font-bold mb-2"><a>tirumalaprasad0333@gmail.com</a></h3>
              <h4 className="text-xl font-bold mb-2">Atchiyyapeta, Badangi, Vizianagaram-(District)</h4>
              <h3 className="text-xl font-bold mb-2">pin code: 535578</h3>
          
              
              {/* <p className="text-gray-400">Building the future, one line of code at a time.</p> */}
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/20A91A04M5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/tirumala-prasad-latchupatula" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="mailto:tirumalaprasad0333@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>
          {/* <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Latchupatula Tirumalaprasad. All rights reserved.</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;



