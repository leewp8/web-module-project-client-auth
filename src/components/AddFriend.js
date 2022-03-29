import React from 'react'


const AddFriend = () => {
    return (<div>
        <h2>Add Friend</h2>
        <form>
            <div>
                <label htmlFor='username'>Username:</label>
                <input id='username'/>
            </div>
            <div>
                <label htmlFor='age'>Age:</label>
                <input id='age'/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input id='Email'/>
            </div>
            <button>Submit</button>
        </form>
        </div>)
  }


  export default AddFriend