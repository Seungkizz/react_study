import Card from "./Card";

function ProfileCard(props) {
    const profiles = [
        { title: "김승기", backgroundColor: "lightgreen", info: "공부" },
        { title: "tom", backgroundColor: "lightblue", info: "개발" },
        { title: "jane", backgroundColor: "darkblue", info: "공부" },
        { title: "jerry", backgroundColor: "lightyellow", info: "개발" }
    ];
    return (
        // <div>
        //     <Card title="김 승기" backgroundColor="lightgreen">
        //         <p>안녕하세요, 김 승기 입니다.</p>
        //         <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        //     </Card>

        //     <Card title="TOM" backgroundColor="lightblue">
        //         <p>안녕하세요, 저는 톰 입니다.</p>
        //         <p>저는 리액트를 공부하고 있어요.</p>
        //     </Card>
        // </div>

        <div>
            {profiles.map((profile, index) => (
                <Card key={index} title={profile.title} backgroundColor={profile.backgroundColor}>
                    <p>{`안녕하세요, ${profile.title}입니다.`}</p>
                    <p>{`저는 리액트를 사용해서 ${profile.info}하고 있습니다.`}</p>
                </Card>
            ))}
        </div>
    );

}

export default ProfileCard;