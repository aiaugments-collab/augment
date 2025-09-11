'use client';

export function AugmentDBSupported() {
  const databases = [
    {
      category: "Relational Databases",
      items: [
        { name: "MySQL", logo: "/databases/mysql.svg" },
        { name: "PostgreSQL", logo: "/databases/postgresql.svg" },
        { name: "Oracle", logo: "/databases/oracle.svg" },
        { name: "SQL Server", logo: "/databases/sqlserver.svg" },
        { name: "MariaDB", logo: "/databases/mariadb.svg" },
        { name: "SQLite", logo: "/databases/sqlite.svg" }
      ]
    },
    {
      category: "NoSQL Databases",
      items: [
        { name: "MongoDB", logo: "/databases/mongodb.svg" },
        { name: "Cassandra", logo: "/databases/cassandra.svg" },
        { name: "Redis", logo: "/databases/redis.svg" },
        { name: "CouchDB", logo: "/databases/couchdb.svg" },
        { name: "Neo4j", logo: "/databases/neo4j.svg" },
        { name: "InfluxDB", logo: "/databases/influxdb.svg" }
      ]
    },
    {
      category: "Cloud Databases",
      items: [
        { name: "Amazon RDS", logo: "/databases/aws-rds.svg" },
        { name: "Azure SQL", logo: "/databases/azure-sql.svg" },
        { name: "Google Cloud SQL", logo: "/databases/gcp-sql.svg" },
        { name: "Snowflake", logo: "/databases/snowflake.svg" },
        { name: "BigQuery", logo: "/databases/bigquery.svg" },
        { name: "Redshift", logo: "/databases/redshift.svg" }
      ]
    },
    {
      category: "Specialized Systems",
      items: [
        { name: "Teradata", logo: "/databases/teradata.svg" },
        { name: "Greenplum", logo: "/databases/greenplum.svg" },
        { name: "ClickHouse", logo: "/databases/clickhouse.svg" },
        { name: "Elasticsearch", logo: "/databases/elasticsearch.svg" },
        { name: "Apache Hive", logo: "/databases/hive.svg" },
        { name: "Presto", logo: "/databases/presto.svg" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            200+ Supported Database Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect to any database system with native drivers and optimized performance
          </p>
        </div>

        <div className="space-y-12">
          {databases.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.items.map((db, dbIndex) => (
                  <div key={dbIndex} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                      {/* Placeholder for database logos */}
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">
                          {db.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">
                      {db.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Don't see your database?
            </h3>
            <p className="text-gray-600 mb-6">
              AugmentDB supports JDBC and ODBC connections, making it compatible with virtually any database system.
            </p>
            <a 
              href="/documentation/augmentdb#supported-databases" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Full Database List
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
