import './RouteDetail.css';


type RouteProps = {
  data: {
    title: string;
    value: string;
  }[];
}

function RouteDetail({ data }: RouteProps) {

  return (
    <div className="route-detail">
      <dl>
        {data.map(({title, value}) => (
          <>
            <dt>{title}</dt>
            <dd>{value}</dd>
          </>
        ))}
      </dl>
    </div>
  )
}

export default RouteDetail
