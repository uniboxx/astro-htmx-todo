import 'htmx.org';
import htmx from 'htmx.org/dist/htmx.esm.js';

htmx.config.allowScriptTags = false;
// per permettere richieste solo sullo stesso dominio
htmx.config.selfRequestsOnly = true;
