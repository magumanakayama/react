import { useState } from 'react'
import { Title, Content, PublishButton } from './index'

const Article = (props) => {
	const [isPublished, setisPublished] = useState(false)
	const publishArticle = () => {
		setisPublished(true)
	}
	return (
		<div>
			<Title title={props.title} />
			<Content content={props.content} />
			<PublishButton isPublished={isPublished} onClick={publishArticle}>公開</PublishButton>
			{/* {"aiueo"} */}
		</div>
	)
};

export default Article;