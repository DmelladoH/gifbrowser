import Gif from 'components/Gif'

export default function GiftDetail ({ gif }) {
  return (
    <div>
      <div>
        <Gif {...gif} />
      </div>
    </div>
  )
}
