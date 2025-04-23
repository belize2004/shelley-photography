// ./components/CustomImageInput.js
import {useEffect} from 'react'
import {set} from 'sanity'

const CustomImageInput = (props) => {
  const {onChange, value} = props

  useEffect(() => {
    if (value?.asset?._ref && !value?.title) {
      const fileName = value.asset._ref.split('-')[1] // e.g. image-<filename>-<hash>.<ext>

      if (fileName) {
        onChange(set({...value, title: fileName}))
      }
    }
  }, [value?.asset?._ref, onChange, value])

  return props.renderDefault(props)
}

export default CustomImageInput
