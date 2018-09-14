import React, {Component} from 'react'


class ToDoList extends Component {

    anotherFunction(){
        var i = 0;
        var totem = this.props.Array.map(
        eachItem => {

            i++;

            return (
                <div>
                    <p className={"id" +i}>
                        {i + "."} {eachItem.username} {eachItem.todo} {eachItem.isDone}
                        <button onClick={() => this.props.deleteFunction(eachItem._id)}> Delete </button>
                        <button onClick={() => this.props.doneFunction(eachItem._id)}>Done</button>


                    </p>
                </div>

            )
        }

    );
        return totem;
}

    render() {

            // var forEachItem = this.props.Array.map(
            //     eachItem => {
            //
            //         return (
            //             <div>
            //                 <p>
            //                         {eachItem.username} {eachItem.todo} {eachItem.isDone}
            //                         <button onClick={() => this.props.deleteFunction(eachItem._id)}> Delete </button>
            //                         <button onClick={() => this.props.doneFunction(eachItem._id)}>Done</button>
            //
            //
            //                 </p>
            //             </div>
            //
            //         )
            //     }
            //
            // );

        var items = this.anotherFunction();


        return (
            <div>
                <h2>{items}</h2>
            </div>
        );
    }
}
export default ToDoList;