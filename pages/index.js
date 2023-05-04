import React from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import HeadlineCards from "@/components/HeadlineCards"
import Food from "@/components/Food"
import Category from "@/components/Category"
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
        <title>FoodApp</title>
    </Head>
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards /> 
      <Food /> 
      <Category />
    </div>
    </>
  )
}
