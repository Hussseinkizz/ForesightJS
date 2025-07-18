import ForesightButtonVisibility from "./test-buttons/ForesightButtonVisibility"
import ForesightButtonResizeable from "./test-buttons/ForesightButtonResizeable"
import ForesightButtonRemoveable from "./test-buttons/ForesightButtonRemoveable"
import ForesightButtonNoName from "./test-buttons/ForesightButtonNoName"
import ControlSection from "./ui/ControlSection"
import { useResetKey } from "../stores/ButtonStateStore"
import { ForesightManager, type CallbackFiredEvent } from "js.foresight"
import { useEffect } from "react"

export const Main = () => {
  const resetKey = useResetKey()

  useEffect(() => {
    const handleCallbackFired = (e: CallbackFiredEvent) => {
      // console.log("✅ Callback Fired!", e)
    }

    ForesightManager.instance.addEventListener("callbackFired", handleCallbackFired)

    return () => {
      ForesightManager.instance.removeEventListener("callbackFired", handleCallbackFired)
    }
  }, [])
  return (
    <div key={resetKey} className="min-h-screen font-sans">
      <ControlSection
        title="Foresight Manager Development Controls"
        subtitle="Control the behavior of the test buttons below using these controls"
      />

      <h2 className="text-3xl font-bold text-center  mb-8">Foresight Test Buttons</h2>
      <div className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-8 justify-center mb-12">
            {/* <ForesightButtonRegular name={"multi hit"} /> */}
            <ForesightButtonVisibility name="visibility" />
            <ForesightButtonResizeable name="resizeable" />
            <ForesightButtonRemoveable name="removeable" />
            <ForesightButtonNoName />
            <ForesightButtonVisibility name="visibility2" />
            <ForesightButtonRemoveable name="removeable2" />
            <ForesightButtonVisibility name="visibility3" />
            <ForesightButtonRemoveable name="removeable3" />
            <ForesightButtonNoName />
            <ForesightButtonVisibility name="visibility4" />
            <ForesightButtonRemoveable name="removeable4" />
            <ForesightButtonNoName />
          </div>
        </div>
      </div>
    </div>
  )
}
