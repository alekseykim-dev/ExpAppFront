import { StoreGetProductsParams } from "@medusajs/medusa"
import { useCollections } from "medusa-react"
import { ChangeEvent } from "react"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const RefinementList = ({
  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { collections, isLoading } = useCollections()

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target
    const collectionIds = refinementList.collection_id || []
    const exists = collectionIds.includes(id)

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      })
      return
    }

    if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      })
      return
    }
    return
  }

  const firstRowCollections = collections?.slice(0, 5)  
  const secondRowCollections = collections?.slice(5, 10)
// Will modify the code if there are changes
  

  return (
    <div className="w-100% flex flex-col items-center justify-between whitespace-nowrap no-scrollbar p-2">
      {[firstRowCollections, secondRowCollections].map((rowCollections, rowIndex) => (
        <div key={rowIndex} className="w-full px-2 overflow-auto h-[auto] no-scrollbar mb-2">
          <div className="flex gap-x-3">
            <ul className="text-base-regular flex items-center justify-between gap-x-1 small:grid small:grid-cols-1 small:gap-y-2">
              {rowCollections?.map((c) => (
                <li key={c.id} className="items-center gap-2 mx-1">
                  <label 
                    className={`flex items-center justify-center px-3 h-[31px] rounded-3xl text-center ${refinementList.collection_id?.includes(c.id) ? 'bg-[#000] text-white' :  'bg-zinc-100 text-light'}`}
                  >
                    {/* hide checkbox, but keep the click function */}
                    <input
                      type="checkbox"
                      defaultChecked={refinementList.collection_id?.includes(c.id)}
                      onChange={(e) => handleCollectionChange(e, c.id)}
                      className="accent-[#000] mx-1 hidden"
                    />
                    {c.title}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RefinementList
