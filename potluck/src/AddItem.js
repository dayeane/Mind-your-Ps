import react from "react"

function AddItem () {
    return (
      <>
        <h2>Here is a form to add an item</h2>
        <div>
            <form>
                <div>
                    <input type="text" name="item">Item Needed</input>
                    <input type="text" name="category">Category</input>
                    <input type="text" name="claimer">Who's Bring It</input>
                </div>
                <button type="submit">
                    Add Item
                </button>
            </form>
        </div>
      </>
    )
}

export default AddItem