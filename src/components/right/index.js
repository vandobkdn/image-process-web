import React from "react";
import options from '../../mocks/select-alphabet-options';
import SelectBox from "./SelectBox";
import './style.css';
import ButtonToolBar from "./ButtonToolBar";
import Button from "@material-ui/core/Button";
import UploadButton from "./UploadButton";

const ActionRightSide = (props) => {

    return (
        <div class="menuRightSide">
            <label>Download</label>

            <div className="Download">
                <div>
                    <SelectBox name="alphabet-select-box" options={options} />
                    <SelectBox name="entity-select-box" options={options} />
                    <ButtonToolBar>
                        <Button variant="contained">Default</Button>
                        <Button variant="contained" color="primary">
                            Primary
                    </Button>
                    </ButtonToolBar>
                </div>
            </div>

            <hr className="singleLine" />

            <label>Upload</label>
            
            <div className="Upload">
                <div>
                    <ButtonToolBar><UploadButton /></ButtonToolBar>
                </div>
            </div>
        </div>
    )
};

export default ActionRightSide;