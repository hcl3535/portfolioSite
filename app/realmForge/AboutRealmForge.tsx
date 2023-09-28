'use client'

import Image from "next/image"
import ImageMarkers from "../ImageMarkers"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AboutRealmForge(){

    const [imgIdx, setImgIdx] = useState(0)

    const listOfIMGS = ['/realmforge3.png','/realmforgeOG.png','/realmforge2.png']

    useEffect(() => {
  
        const intreval = setInterval(() =>{
          if(imgIdx === listOfIMGS.length - 1){
            setImgIdx(0)
            return
          }
          
          setImgIdx(imgIdx + 1)
        }, 7000)

        const fadeIntreval = setInterval(() =>{
            
          }, 6000)

        return() => {
          clearInterval(intreval)
          clearInterval(fadeIntreval)
        }

      },[imgIdx])

      

    return(
        <section className="flex flex-col lg:ml-32 lg:mr-32 h-screen">
            <h1 className="text-4xl lg:text-6xl flex justify-center pt-5">RealmForge</h1>
            <section className="flex flex-col h-4/6">
              <section className="flex flex-col lg:flex-row lg:h-screen">
                <section className="lg:w-1/2  lg:h-1/2 flex flex-col  mt-2 lg:mt-40 lg:justify-center mr-5w ">
                    <p className="lg:text-2xl mb-5 first_Word_Red"> is an interactive map building tool made for games like D&D and other roll-playing games. By creating an account and importing assets, you can create custom maps that are interactive.</p>
                    <p className="lg:text-2xl mb-5 ">Once your done you can share your map which will give it a chance to be displayed on the front page for others to enjoy!</p>
                    <p className="lg:text-2xl mb-5 ">This is a FullStack application that many users are allready useing alongside their D&D games.</p>
                    <a href='https://www.realmforge.site/'>
                      <h1 className="lg:text-3xl mb-5 first_Word_Launch"> RealmForge</h1>
                    </a>     
                  </section>
                  <section className="h-2/5 w-full lg:w-1/2 lg:h-full lg:flex flex-col justify-center overflow-hidden justify-self-center lg:ml-5 ">
                    <section className="flex flex-col h-full self-center justify-center lg:h-5/6 animate-fade">
                        <Image src={listOfIMGS[imgIdx]} alt="Picture of me" width={1896} height={2130} key={imgIdx} className="  max-h-full h-4/6 w-max self-center aspect-video lg:min-h-full about_me_pic animate-fade-left animate-duration-1000"  />
                        <ImageMarkers imgIdx={imgIdx}/>
                    </section>
                  </section>
                </section>
                {/* <section className="mt-5">
                      <h1 className="text-center lg:text-3xl mb-5">built useing</h1>
                      <section className="flex justify-center">
                        <section className="flex flex-col">
                          <Image src='/react.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                          <h3 className="text-center mt-5 lg:text-xl">React</h3>
                        </section>
                        <section className="flex flex-col ">
                          <Image src='/javascript.png' alt="" width={100} height={100} className="h-1/2 w-auto" />
                          <h3 className="text-center mt-5 lg:text-xl">JavaScript</h3>
                        </section>
                        <section className="flex flex-col">
                          <Image src='/Node.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                          <h3 className="text-center mt-5 lg:text-xl">Node</h3>
                        </section>
                        <section className="flex flex-col">
                          <Image src='/postgresql.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                          <h3 className="text-center mt-5 lg:text-xl">Postgresql</h3>
                        </section>
                      </section>
                    </section> */}
            </section>
        </section>
    )
}