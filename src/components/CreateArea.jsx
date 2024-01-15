import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [isExpand, setExpand] = useState(false);

    function expand(){
        setExpand(true)
    }
    

  return (
    <div>
      <form className="create-note">
        {isExpand && <input
          name="title"
          placeholder="Title"
          onChange={props.noteWrite}
          value={props.inputTitle.title}
        />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
          onClick={expand}
          onChange={props.noteWrite}
          value={props.inputTitle.content}
        />
        {isExpand && <Zoom in={true}>
            <Fab onClick={props.noteAdd}>
            <AddIcon />
            </Fab>
            </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
