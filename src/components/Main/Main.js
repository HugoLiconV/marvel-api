import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'
import Hero from '../Hero/Hero'
import Comics from "../Comics/Comics";
import Characters from '../Characters/Characters'
import './Main.css'

const Main = (props) => {
  // TODO: PRops por defecto
    const onPageChanged = data => {
      console.log('change');
    // const { allCountries } = this.state;
    // const { currentPage, totalPages, pageLimit } = data;

    // const offset = (currentPage - 1) * pageLimit;
    // const currentCountries = allCountries.slice(offset, offset + pageLimit);

    // this.setState({ currentPage, currentCountries, totalPages });
    };
    
  return (
    <main>
       <Hero/>
       {/* <Comics {...props}/> */}
        <Switch>
          <Route exact path="/" render={()=> <Comics {...props}/>}/>
          <Route path="/comics" render={()=> <Comics {...props}/>}/>
          <Route path="/characters" component={Characters}/>
        </Switch>
        <div className="flex-container-pagination">
          <Pagination
            totalRecords={200}
            pageLimit={18}
            pageNeighbours={1}
            onPageChanged={onPageChanged}
          />
       </div>
    </main>
  );
}

export default Main;