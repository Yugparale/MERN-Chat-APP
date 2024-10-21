
const Message = () => {
  return (
  <>
      <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://external-preview.redd.it/anime-girl-wallpaper-4k-best-purple-wallpaper-v0-c2R4ZzMxejg0dXZjMTkzlWbfz3ccF2si-SnE3tJvXXr2koBsiq70Ns-foAoP.png?format=pjpg&auto=webp&s=b3223277d956b86f9b6a2950c6153683ca30ef23" />
    </div>
  </div>
  <div className="chat-header">
    JID
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgCEtYFqOefNPaoJeJAe9f0MW2jdbkUDeZA&s" />
    </div>
  </div>
  <div className="chat-header">
    21 Savage
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
</div>
</>
  )
}

export default Message
