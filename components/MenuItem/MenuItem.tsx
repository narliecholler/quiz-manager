import Link from 'next/link'

type AboutProps = {
  name: string,
  link: string
}

const MenuItem = ({ name, link }: AboutProps) => {
  return (
    <Link href={link}>
      {name}
    </Link>
  )
}

export default MenuItem