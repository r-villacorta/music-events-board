import React, {useState} from 'react';
import EventCard from "./components/EventCard.jsx";
import events from "./data.js";
import "\./App.css";

export default function App() {
 const [query, setQuery] = useState("");

  const items = Array.isArray(events) ? events : [];
  const q = query.trim().toLowerCase();

  const filtered = q
    ? items.filter(item =>
        (item.title || "").toLowerCase().includes(q) ||
        (item.description || "").toLowerCase().includes(q) ||
        (item.location || "").toLowerCase().includes(q)
      )
    : items;

      console.log({ eventsLength: items.length, filteredLength: filtered.length, query });

  return (
        <div>
      <header className="site-header">
        <div className="container">
          <h1>LiveNYC</h1>
          <p className="subtitle">A curated board for NYC's music scene — discover concerts, explore alternative genres, and rising artists.</p> 

          <div className="search-row">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events or keywords..."
              aria-label="Search events"
            />
            <p className="count">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="cards">
          {filtered.length > 0 ? (
            filtered.map(item => <EventCard key={item.id ?? item.title} {...item} />)
          ) : (
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <p>No events found. (If you expected events, check console or your data file.)</p>
            </div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">Built for Week 1 - Community Board</div>
      </footer>
    </div>
  );
}

