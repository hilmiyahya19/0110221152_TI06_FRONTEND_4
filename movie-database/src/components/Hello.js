/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
function Hello(props) {
  // Melakukan destructing props (object)
  return (
    <div>
        <fieldset>
            <legend><h1>Halo {props.nama}</h1></legend>
            <p>{props.nama} anak {props.jurusan} teknik informatika yang ganteng dan sholeh.</p>
        </fieldset>
    </div>
    );
}

export default Hello;
