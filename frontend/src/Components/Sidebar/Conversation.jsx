
const Conversation = () => {
  return (
    <div className="flex gap-2 items-center hover:bg-purp rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
            <img src="https://external-preview.redd.it/anime-girl-wallpaper-4k-best-purple-wallpaper-v0-c2R4ZzMxejg0dXZjMTkzlWbfz3ccF2si-SnE3tJvXXr2koBsiq70Ns-foAoP.png?format=pjpg&auto=webp&s=b3223277d956b86f9b6a2950c6153683ca30ef23" alt="user avatar" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">JID</p>
            <span className="text-xl"></span>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>

    
  )
}

export default Conversation
