import React from 'react';
import "./ImageList.css"
import ImageCard from '../ImageCard/ImageCard'

const ImageList = ({images}) => {
	console.log(images)
	return(
		<div className="image-list">
			{
				images.map(image => {
					return(
						<ImageCard 
							key={image.id}
							image={image}
						/>
					)
				})
			}
		</div>
	)
};

export default ImageList;