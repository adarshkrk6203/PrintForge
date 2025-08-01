import ModelsGrid from "@/app/components/ModelsGrid"
import type { ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"

export default async function Page() {
    /**
     * Challenge:
     * 1. Add a form with an input above the ModelsGrid. Don't worry about
     *    a label for now.
     * 2. Get access to the query from searchParams. Optional: use the
     *    ModelsPageProps from our types file to satisy TypeScript.
     * 3. Filter down the models being passed to ModelsGrid. Include:
     *    a. any models with a `name` that includes the query, AND
     *    b. any models with a `description` that includes the query.
     * 
     *    Make sure to ignore capitalization when filtering.
     * 
     * Optional: try to style it like the design in Figma
     */
    const models = await getModels()

    return (
        <>
            {/* form goes here */}
            <ModelsGrid title="3D Models" models={models} />
        </>
    )
}
