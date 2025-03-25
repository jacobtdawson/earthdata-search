import sharp from 'sharp'

/**
 * Resize a given image to a given height and width
 * @param {Buffer<Image>} image An image binary contained in a buffer
 * @param {Integer} height image height
 * @param {Integer} width image width
 * @return {Buffer<Image>} Resized image or null
 */
export const resizeImage = async (image, height, width) => {
  try {
    // Only attempt to resize the image if a height or a width were provided
    if (height || width) {
      return await sharp(image)
        .resize(
          (width || null),
          (height || null),
          { fit: 'inside' }
        )
        .toFormat('png')
        .toBuffer()
    }

    // Default to return the full image
    return await sharp(image)
      .toFormat('png')
      .toBuffer()
  } catch (error) {
    const errorMessage = `Failed to resize image: ${error.toString()}`
    console.log(errorMessage)
    throw new Error(errorMessage)
  }
}
