import react from "react"

function AddItem () {
    return (
      <>
        <h2>Here is a form to add an item</h2>
        <div>
            <form>
                <div>
                    <label for="itme">Item</label>
                    <input type="text" name="item"/>
                    <label for="category">Category</label>
                    <input type="text" name="category"/>
                    <label for="claimer">Owner</label>
                    <input type="text" name="claimer"/>
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