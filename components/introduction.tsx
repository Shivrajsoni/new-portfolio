import Image from "next/image"

export default function Introduction() {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Shivraj Soni
        </h1>
        <p className="text-zinc-600 dark:text-zinc-500">
          I tinker around with my beloved laptop
        </p>
      </div>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/147425268?v=4"
          alt="Shivraj's Photo"
          height={200}
          width={200}
          className="object-cover rounded-full border-4 dark:border-zinc-800 border-zinc-900"
        />
      </div>
    </div>
  )
}
