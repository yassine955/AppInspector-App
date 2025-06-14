CREATE TABLE "poc.app" (
	id serial PRIMARY KEY NOT NULL,
	CONSTRAINT "poc.app_id_unique" UNIQUE("id")
);
