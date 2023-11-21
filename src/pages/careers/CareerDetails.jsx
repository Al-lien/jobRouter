import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui incidunt
          repellat officiis dolor asperiores, quas quis nemo dolorum quia
          tempore numquam quam praesentium ex sed id, sunt quidem doloribus
          harum soluta voluptatem, laboriosam aliquam doloremque maiores? Dicta,
          consequatur. Ipsam, porro.
        </p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:3001/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find that career");
  }
  return res.json();
};
