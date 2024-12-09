import CountUp from "react-countup";

const Struggle = () => {
  return (
    <div>
      <section className="py-20 space-y-5">

        <div className="space-y-3 text-center">
        <h2 className="text-5xl font-bold text-center">A Glimpse into the Struggle </h2>
        <p className="text-lg font-semibold">These numbers reflect the deep impact of the struggle for justice and equality. As we present these figures, <br /> we remember the courage of those who stood against oppression and honor their enduring legacy.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center px-20 gap-4">
          <div className="rounded-lg p-5  drop-shadow-xl bg-red-200">
            <h2 className="text-4xl font-bold ">
              <CountUp start={0} end={500} />+
            </h2>
            <p className="py-1 text-2xl font-bold">Total Martyrs</p>
            <p>Tragically, more than 500 students and children have lost their lives in the struggle for justice and equality. We honor their bravery and sacrifice.</p>
          </div>
          <div className="rounded-lg p-5 bg-yellow-100 drop-shadow-xl">
            <h2 className="text-4xl font-bold ">
              <CountUp start={0} end={5500} />+
            </h2>
            <p className="py-1 text-2xl font-bold">Total Injured</p>
            <p>With over 33,000 injuries reported to date, the movement has seen immense suffering. Our thoughts are with those who have been hurt in the fight for a fairer future.</p>
          </div>
          <div className="rounded-lg p-5 bg-green-200 drop-shadow-xl">
            <h2 className="text-4xl font-bold ">
              <CountUp start={0} end={11000} />+</h2>
            <p className="py-1 text-2xl font-bold">Arrest & Disappear</p>
            <p>The crackdown on protestors has led to more than 11,000 arrests and disappearances. We strive to shed light on these injustices and seek accountability.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Struggle;