const OurTeam=()=>{
      const teamMembers=[
            
            {
                  name: "Adam Brick",
                  role: "A teacher who inspires others to be a better version of thenselves",
                  img: "/images/headshoot3.png",
                  stars : 2
            },  {
                  name: "Adam Brick",
                  role: "A teacher who inspires others to be a better version of thenselves",
                  img: "/images/headshoot3.png",
                  stars : 1
            }, 
             {
                  name: "Adam Brick",
                  role: "A teacher who inspires others to be a better version of thenselves",
                  img: "/images/headshoot3.png",
                  stars : 0
            }
      ]
      return(
<section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">
        OUR <span className="text-blue-500">TEAM</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg relative overflow-hidden"
          >
            <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                            <div className="absolute inset-0  bg-gradient-to-r from-blue-600 to-green-500 opacity-20 rotate-45 -translate-y-20"></div>

              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-full h-full rounded-2xl border-4 border-blue-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-6">
              {member.name.split(" ")[0]} <span className="text-blue-500">{member.name.split(" ")[1]}</span>
            </h3>
            <p className="text-sm mt-3 mb-4 text-gray-300">{member.role}</p>
            <div className="flex justify-center gap-1">
              {Array.from({ length: member.stars }).map((_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>      )
}
export default OurTeam;