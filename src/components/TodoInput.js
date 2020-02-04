import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem, handleCancelEdit, handleSave} = this.props
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="add todo item" value={item} onChange={handleChange} />
                    </div>

                    {
                        editItem ? 
                        (
                            <div className="row mt-3">
                                <div className="col-md-3">
                                    <button className="btn btn-success mr-2" onClick={handleSave}>Save</button>
                                    <button className="btn btn-danger" onClick={handleCancelEdit}>Cancel</button>
                                </div>
                                <div className="offset-md-6 col-3">
                                    <button className="btn btn-primary ml-2" onClick={handleSubmit}>Add this as new</button>
                                </div>
                            
                            
                            
                        </div>) :
                        (
                            <button className="btn btn-block btn-primary mt-3" onClick={handleSubmit}>Add new item</button>
                        )
                    }
                </form>
            </div>
        )
    }
}
