import React from 'react'
import { Table, Button } from 'reactstrap'
import APIURL from '../../helpers/environment'

const WorkoutTable = (props) => {

    const deleteWorkout = (workout) => {
        console.log(workout.id)
        fetch(`${APIURL}/api/log/delete/${workout.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchWorkouts())
    }

    const workoutMapper = () => {
        return props.workouts.map(
            function (workout, index) {
                return(
                    <tr key={index}>
                        <th scope="row">{workout.id}</th>
                        <td>{workout.result}</td>
                        <td>{workout.description}</td>
                        <td>{workout.definition}</td>
                        <td>
                            <Button color="warning" onClick={() => { props.editUpdateWorkout(workout); props.updateOn() }}>Update</Button>
                            <Button color="danger" onClick={() => { deleteWorkout(workout) }}>Delete</Button>
                        </td>
                    </tr>
                )
            }
        )
    }

    return (
        <>
            <h3>Workout History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Result</th>
                        <th>Description</th>
                        <th>Definition</th>
                    </tr>
                </thead>
                <tbody>
                    {workoutMapper()}
                </tbody>
            </Table>
        </>
    )

}

export default WorkoutTable