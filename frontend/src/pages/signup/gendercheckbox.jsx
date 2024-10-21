const GenderCheckBox=({onCheckboxChange, selectedGender})=>{
    return <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender=='male'? 'selected':""}`}>
                <input type="checkbox" className="checkbox border-gray-500" checked={selectedGender==="male"} onChange={()=>{onCheckboxChange("male")}}/>
                <span className="label-text"> Male</span>
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer  ${selectedGender=='female'? 'selected':""}`}>
                <input type="checkbox" className="checkbox border-gray-500" checked={selectedGender==="female"} onChange={()=>{onCheckboxChange("female")}}/>
                <span className="label-text">Female</span>
            </label>
        </div>
    </div>
}

export default  GenderCheckBox;

// starter code 
// const GenderCheckBox=()=>{
//     return <div className="flex">
//         <div className="form-control">
//             <label className={`label gap-2 cursor-pointer`}>
//                 <input type="checkbox" className="checkbox border-gray-500" />
//                 <span className="label-text"> Male</span>
//             </label>
//         </div>
//         <div className="form-control">
//             <label className={`label gap-2 cursor-pointer`}>
//                 <input type="checkbox" className="checkbox border-gray-500" />
//                 <span className="label-text">Female</span>
//             </label>
//         </div>
//     </div>
// }