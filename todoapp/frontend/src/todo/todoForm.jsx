import React from 'react';
import Grid from '../template/grid';
import IconButtons from '../template/iconButton'

export default function TodoForm(props){

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === 'Escape') {
            props.handleClear();
        }
    };

    return  (
        <div role='form' className='todoForm'>

            <Grid cols="12 9 10">
                <input id='description' 
                    className='form-control' 
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    value={props.description}
                    onKeyUp={keyHandler}></input>
            </Grid>

            <Grid cols="12 3 2">
                <IconButtons 
                    style="primary" 
                    icon="plus" 
                    onClick={props.handleAdd}>

                </IconButtons>

                <IconButtons 
                    style='info' 
                    icon='search' 
                    onClick={props.handleSearch}>
                </IconButtons>

                <IconButtons
                    style="default"
                    icon="close"
                    onClick={props.handleClear}
                ></IconButtons>

            </Grid>

        </div>
    );
}