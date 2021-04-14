function Table({ countries }) {
  return (
    <div className="table">
      <table>
          {countries.map(({country, cases}) => (
            <tr>
              <td>{country}</td>
              <td>{cases}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Table;
