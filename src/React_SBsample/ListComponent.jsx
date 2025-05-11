const ListComponent = ({elem}) => {
    return (
        <>
            <dt>
                <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>{elem.title}（{elem.price}円）</a>
                {/* <a href={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROK-pYwbz6-rTQY15fpN3amlqK5I94VR7Ecw&s`}>{elem.title}（{elem.price}円）</a> */}
            </dt>
            <dd>
                {elem.summary}
                {elem.download && <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>画像をダウンロード</a>}
            </dd>
        </>
    )
}

export default ListComponent;