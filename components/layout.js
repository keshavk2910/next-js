import Link from 'next/link';

export default function Layout(props) {
    return (
      <div>
        <ul>
        <Link href="/"><a><li>Home</li></a></Link>
        <Link href="/about"><a><li>About</li></a></Link>
        </ul>
        {props.children}
      </div>
    )
  }