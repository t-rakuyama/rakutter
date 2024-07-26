import Image from 'next/image'

export const Header = () => (
  <>
    <Image src="r.svg" className="inline-block h-7" alt="R" width={28} height={28} />
    <h1 className="inline-block text-xl">
      <span className="hidden">R</span>akutter
    </h1>
  </>
)
