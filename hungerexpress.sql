--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2022-02-20 00:09:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3416 (class 1262 OID 25203)
-- Name: HungerExpress; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "HungerExpress" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';


ALTER DATABASE "HungerExpress" OWNER TO postgres;

\connect "HungerExpress"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 200 (class 1259 OID 25657)
-- Name: addon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.addon (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    price integer NOT NULL,
    count integer NOT NULL
);


ALTER TABLE public.addon OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 25660)
-- Name: addon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.addon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.addon_id_seq OWNER TO postgres;

--
-- TOC entry 3417 (class 0 OID 0)
-- Dependencies: 201
-- Name: addon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.addon_id_seq OWNED BY public.addon.id;


--
-- TOC entry 202 (class 1259 OID 25662)
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    id integer NOT NULL,
    location character varying(20) NOT NULL,
    block character varying(20) NOT NULL,
    road character varying(20) NOT NULL,
    house character varying(20) NOT NULL,
    apartment character varying(20) NOT NULL,
    postal_code character varying(20) NOT NULL,
    start timestamp without time zone NOT NULL,
    finish timestamp without time zone NOT NULL
);


ALTER TABLE public.address OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 25665)
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.address_id_seq OWNER TO postgres;

--
-- TOC entry 3418 (class 0 OID 0)
-- Dependencies: 203
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- TOC entry 204 (class 1259 OID 25667)
-- Name: admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    dob timestamp without time zone NOT NULL,
    phone character varying(20) NOT NULL,
    email character varying(30) NOT NULL
);


ALTER TABLE public.admin OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 25670)
-- Name: admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_id_seq OWNER TO postgres;

--
-- TOC entry 3419 (class 0 OID 0)
-- Dependencies: 205
-- Name: admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;


--
-- TOC entry 206 (class 1259 OID 25672)
-- Name: cart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    customer_id integer NOT NULL,
    order_time timestamp without time zone NOT NULL,
    delivery_time timestamp without time zone NOT NULL,
    total_price integer NOT NULL,
    order_id integer
);


ALTER TABLE public.cart OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 25675)
-- Name: cart_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_id_seq OWNER TO postgres;

--
-- TOC entry 3420 (class 0 OID 0)
-- Dependencies: 207
-- Name: cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;


--
-- TOC entry 208 (class 1259 OID 25677)
-- Name: cart_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart_item (
    id integer NOT NULL,
    item_id integer NOT NULL,
    cart_id integer NOT NULL,
    total_price integer NOT NULL,
    count integer NOT NULL
);


ALTER TABLE public.cart_item OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 25680)
-- Name: cart_item_addon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart_item_addon (
    id integer NOT NULL,
    cart_item_id integer NOT NULL,
    addon_id integer NOT NULL,
    total_price integer NOT NULL,
    count integer NOT NULL
);


ALTER TABLE public.cart_item_addon OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 25683)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 25686)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- TOC entry 3421 (class 0 OID 0)
-- Dependencies: 211
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 212 (class 1259 OID 25688)
-- Name: coin_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coin_history (
    id integer NOT NULL,
    coin_use_type_id integer NOT NULL,
    customer_id integer NOT NULL,
    voucher_id integer NOT NULL,
    "time" timestamp without time zone NOT NULL
);


ALTER TABLE public.coin_history OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 25691)
-- Name: coin_history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.coin_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coin_history_id_seq OWNER TO postgres;

--
-- TOC entry 3422 (class 0 OID 0)
-- Dependencies: 213
-- Name: coin_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.coin_history_id_seq OWNED BY public.coin_history.id;


--
-- TOC entry 214 (class 1259 OID 25693)
-- Name: coin_use_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coin_use_type (
    id integer NOT NULL,
    admin_id integer NOT NULL,
    available_data character varying(50) NOT NULL,
    coin_amount integer NOT NULL,
    voucher_amount integer NOT NULL
);


ALTER TABLE public.coin_use_type OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 25696)
-- Name: coin_use_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.coin_use_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coin_use_type_id_seq OWNER TO postgres;

--
-- TOC entry 3423 (class 0 OID 0)
-- Dependencies: 215
-- Name: coin_use_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.coin_use_type_id_seq OWNED BY public.coin_use_type.id;


--
-- TOC entry 216 (class 1259 OID 25698)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    current_coin integer NOT NULL,
    current_address_id integer NOT NULL,
    customer_image_id integer
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 25701)
-- Name: customer_address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer_address (
    id integer NOT NULL,
    customer_id integer NOT NULL,
    location character varying(20) NOT NULL,
    block character varying(20) NOT NULL,
    road character varying(20) NOT NULL,
    house character varying(20) NOT NULL,
    apartment character varying(20) NOT NULL,
    postal_code character varying(20) NOT NULL,
    start character varying(20) NOT NULL,
    finish character varying(20) NOT NULL
);


ALTER TABLE public.customer_address OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 25704)
-- Name: customer_address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_address_id_seq OWNER TO postgres;

--
-- TOC entry 3424 (class 0 OID 0)
-- Dependencies: 218
-- Name: customer_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_address_id_seq OWNED BY public.customer_address.id;


--
-- TOC entry 219 (class 1259 OID 25706)
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_id_seq OWNER TO postgres;

--
-- TOC entry 3425 (class 0 OID 0)
-- Dependencies: 219
-- Name: customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_id_seq OWNED BY public.customer.id;


--
-- TOC entry 220 (class 1259 OID 25708)
-- Name: customer_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer_image (
    id integer NOT NULL,
    customer_id integer NOT NULL,
    link character varying(50) NOT NULL,
    "time" timestamp without time zone NOT NULL
);


ALTER TABLE public.customer_image OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 25711)
-- Name: customer_image_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_image_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_image_id_seq OWNER TO postgres;

--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 221
-- Name: customer_image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_image_id_seq OWNED BY public.customer_image.id;


--
-- TOC entry 222 (class 1259 OID 25713)
-- Name: delivery_address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.delivery_address (
    id integer NOT NULL,
    location character varying(20) NOT NULL,
    block character varying(20) NOT NULL,
    road character varying(20) NOT NULL,
    house character varying(20) NOT NULL,
    apartment character varying(20) NOT NULL,
    postal_code character varying(20) NOT NULL,
    order_id integer
);


ALTER TABLE public.delivery_address OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 25716)
-- Name: delivery_address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.delivery_address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.delivery_address_id_seq OWNER TO postgres;

--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 223
-- Name: delivery_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.delivery_address_id_seq OWNED BY public.delivery_address.id;


--
-- TOC entry 224 (class 1259 OID 25718)
-- Name: gift_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gift_info (
    id integer NOT NULL,
    order_id integer NOT NULL,
    name character varying(50) NOT NULL,
    phone character varying(13) NOT NULL
);


ALTER TABLE public.gift_info OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 25721)
-- Name: gift_info_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gift_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gift_info_id_seq OWNER TO postgres;

--
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 225
-- Name: gift_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gift_info_id_seq OWNED BY public.gift_info.id;


--
-- TOC entry 226 (class 1259 OID 25723)
-- Name: invoice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoice (
    id integer NOT NULL,
    order_id integer NOT NULL,
    vat_amount real NOT NULL,
    delivery_fee real NOT NULL,
    total_price real NOT NULL
);


ALTER TABLE public.invoice OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 25726)
-- Name: invoice_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.invoice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.invoice_id_seq OWNER TO postgres;

--
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 227
-- Name: invoice_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.invoice_id_seq OWNED BY public.invoice.id;


--
-- TOC entry 228 (class 1259 OID 25728)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(50) NOT NULL,
    count integer NOT NULL,
    rating real NOT NULL
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 264 (class 1259 OID 26192)
-- Name: item_addon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_addon (
    id integer NOT NULL,
    item_id integer NOT NULL,
    addon_id integer NOT NULL
);


ALTER TABLE public.item_addon OWNER TO postgres;

--
-- TOC entry 263 (class 1259 OID 26190)
-- Name: item_addon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_addon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_addon_id_seq OWNER TO postgres;

--
-- TOC entry 3430 (class 0 OID 0)
-- Dependencies: 263
-- Name: item_addon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_addon_id_seq OWNED BY public.item_addon.id;


--
-- TOC entry 268 (class 1259 OID 26229)
-- Name: item_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_category (
    id integer NOT NULL,
    item_id integer NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public.item_category OWNER TO postgres;

--
-- TOC entry 267 (class 1259 OID 26227)
-- Name: item_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_category_id_seq OWNER TO postgres;

--
-- TOC entry 3431 (class 0 OID 0)
-- Dependencies: 267
-- Name: item_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_category_id_seq OWNED BY public.item_category.id;


--
-- TOC entry 229 (class 1259 OID 25731)
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_id_seq OWNER TO postgres;

--
-- TOC entry 3432 (class 0 OID 0)
-- Dependencies: 229
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 266 (class 1259 OID 26218)
-- Name: item_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_image (
    id integer NOT NULL,
    image_id integer NOT NULL,
    item_id integer NOT NULL
);


ALTER TABLE public.item_image OWNER TO postgres;

--
-- TOC entry 265 (class 1259 OID 26216)
-- Name: item_image_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_image_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_image_id_seq OWNER TO postgres;

--
-- TOC entry 3433 (class 0 OID 0)
-- Dependencies: 265
-- Name: item_image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_image_id_seq OWNED BY public.item_image.id;


--
-- TOC entry 230 (class 1259 OID 25733)
-- Name: item_review; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_review (
    id integer NOT NULL,
    item_id integer NOT NULL,
    order_id integer NOT NULL,
    rating real NOT NULL,
    description text
);


ALTER TABLE public.item_review OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 25739)
-- Name: item_review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_review_id_seq OWNER TO postgres;

--
-- TOC entry 3434 (class 0 OID 0)
-- Dependencies: 231
-- Name: item_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_review_id_seq OWNED BY public.item_review.id;


--
-- TOC entry 232 (class 1259 OID 25741)
-- Name: orderr; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orderr (
    id integer NOT NULL,
    cart_id integer NOT NULL,
    delivery_address_id integer NOT NULL,
    restaurant_manager_id integer NOT NULL,
    phone character varying(13) NOT NULL,
    name character varying,
    payment_info_id integer,
    promo_use_id integer,
    voucher_id integer,
    invoice_id integer,
    gift_info_id integer,
    restaurant_review_id integer
);


ALTER TABLE public.orderr OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 25747)
-- Name: normal_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.normal_order (
    estimated_time timestamp without time zone NOT NULL
)
INHERITS (public.orderr);


ALTER TABLE public.normal_order OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 25753)
-- Name: orderr_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orderr_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orderr_id_seq OWNER TO postgres;

--
-- TOC entry 3435 (class 0 OID 0)
-- Dependencies: 234
-- Name: orderr_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orderr_id_seq OWNED BY public.orderr.id;


--
-- TOC entry 235 (class 1259 OID 25755)
-- Name: payment_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment_info (
    id integer NOT NULL,
    order_id integer NOT NULL,
    account_no character varying(50) NOT NULL,
    type character varying(50) NOT NULL,
    payment_time time without time zone NOT NULL,
    transaction_id character varying(50) NOT NULL
);


ALTER TABLE public.payment_info OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 25758)
-- Name: payment_info_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_info_id_seq OWNER TO postgres;

--
-- TOC entry 3436 (class 0 OID 0)
-- Dependencies: 236
-- Name: payment_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_info_id_seq OWNED BY public.payment_info.id;


--
-- TOC entry 237 (class 1259 OID 25760)
-- Name: pickup; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pickup (
    pin character varying(6) NOT NULL,
    target_time timestamp without time zone NOT NULL
)
INHERITS (public.orderr);


ALTER TABLE public.pickup OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 25766)
-- Name: pre_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pre_order (
    target_time timestamp without time zone NOT NULL
)
INHERITS (public.orderr);


ALTER TABLE public.pre_order OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 25772)
-- Name: promo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.promo (
    id integer NOT NULL,
    promo_type_id integer NOT NULL,
    admin_id integer NOT NULL,
    min_amount integer NOT NULL,
    max_count integer NOT NULL,
    start_time timestamp without time zone NOT NULL,
    finish_time timestamp without time zone NOT NULL
);


ALTER TABLE public.promo OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 25775)
-- Name: promo_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.promo_type (
    id integer NOT NULL,
    type character varying(50) NOT NULL,
    owner_id integer NOT NULL,
    value integer NOT NULL,
    owner_type character varying(50) NOT NULL
);


ALTER TABLE public.promo_type OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 25778)
-- Name: promo_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.promo_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.promo_type_id_seq OWNER TO postgres;

--
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 241
-- Name: promo_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.promo_type_id_seq OWNED BY public.promo_type.id;


--
-- TOC entry 242 (class 1259 OID 25780)
-- Name: promo_use; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.promo_use (
    id integer NOT NULL,
    promo_id integer NOT NULL,
    order_id integer NOT NULL,
    "time" timestamp without time zone NOT NULL
);


ALTER TABLE public.promo_use OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 25783)
-- Name: promo_use_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.promo_use_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.promo_use_id_seq OWNER TO postgres;

--
-- TOC entry 3438 (class 0 OID 0)
-- Dependencies: 243
-- Name: promo_use_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.promo_use_id_seq OWNED BY public.promo_use.id;


--
-- TOC entry 244 (class 1259 OID 25785)
-- Name: restaurant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurant (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    location character varying(50) NOT NULL,
    rating real NOT NULL,
    current_service_charge_id integer NOT NULL,
    current_address_id integer NOT NULL,
    restaurant_manager_id integer
);


ALTER TABLE public.restaurant OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 25788)
-- Name: restaurant_address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurant_address (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    location character varying(20) NOT NULL,
    block character varying(20) NOT NULL,
    road character varying(20) NOT NULL,
    house character varying(20) NOT NULL,
    apartment character varying(20) NOT NULL,
    postal_code character varying(20) NOT NULL,
    start timestamp without time zone NOT NULL,
    finish timestamp without time zone NOT NULL
);


ALTER TABLE public.restaurant_address OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 25791)
-- Name: restaurant_address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurant_address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurant_address_id_seq OWNER TO postgres;

--
-- TOC entry 3439 (class 0 OID 0)
-- Dependencies: 246
-- Name: restaurant_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurant_address_id_seq OWNED BY public.restaurant_address.id;


--
-- TOC entry 247 (class 1259 OID 25793)
-- Name: restaurant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurant_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurant_id_seq OWNER TO postgres;

--
-- TOC entry 3440 (class 0 OID 0)
-- Dependencies: 247
-- Name: restaurant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurant_id_seq OWNED BY public.restaurant.id;


--
-- TOC entry 248 (class 1259 OID 25795)
-- Name: restaurant_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurant_image (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    link character varying(50) NOT NULL,
    "time" timestamp without time zone NOT NULL
);


ALTER TABLE public.restaurant_image OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 25798)
-- Name: restaurant_image_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurant_image_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurant_image_id_seq OWNER TO postgres;

--
-- TOC entry 3441 (class 0 OID 0)
-- Dependencies: 249
-- Name: restaurant_image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurant_image_id_seq OWNED BY public.restaurant_image.id;


--
-- TOC entry 250 (class 1259 OID 25800)
-- Name: restaurant_manager; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurant_manager (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    address_id integer NOT NULL,
    name character varying(50) NOT NULL,
    dob timestamp without time zone NOT NULL,
    phone character varying(20) NOT NULL,
    email character varying(30) NOT NULL
);


ALTER TABLE public.restaurant_manager OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 25803)
-- Name: restaurant_manager_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurant_manager_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurant_manager_id_seq OWNER TO postgres;

--
-- TOC entry 3442 (class 0 OID 0)
-- Dependencies: 251
-- Name: restaurant_manager_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurant_manager_id_seq OWNED BY public.restaurant_manager.id;


--
-- TOC entry 252 (class 1259 OID 25805)
-- Name: restaurant_review; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurant_review (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    order_id integer NOT NULL,
    rating real NOT NULL,
    description text
);


ALTER TABLE public.restaurant_review OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 25811)
-- Name: restaurant_review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurant_review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurant_review_id_seq OWNER TO postgres;

--
-- TOC entry 3443 (class 0 OID 0)
-- Dependencies: 253
-- Name: restaurant_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurant_review_id_seq OWNED BY public.restaurant_review.id;


--
-- TOC entry 254 (class 1259 OID 25813)
-- Name: rush_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rush_order (
    maximum_time timestamp without time zone NOT NULL,
    estimated_time timestamp without time zone NOT NULL
)
INHERITS (public.orderr);


ALTER TABLE public.rush_order OWNER TO postgres;

--
-- TOC entry 255 (class 1259 OID 25819)
-- Name: search_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.search_history (
    id integer NOT NULL,
    customer_id integer NOT NULL,
    description character varying(50) NOT NULL,
    type character varying(50) NOT NULL,
    "time" timestamp without time zone NOT NULL
);


ALTER TABLE public.search_history OWNER TO postgres;

--
-- TOC entry 256 (class 1259 OID 25822)
-- Name: search_history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.search_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.search_history_id_seq OWNER TO postgres;

--
-- TOC entry 3444 (class 0 OID 0)
-- Dependencies: 256
-- Name: search_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.search_history_id_seq OWNED BY public.search_history.id;


--
-- TOC entry 257 (class 1259 OID 25824)
-- Name: service_charge; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_charge (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    value integer NOT NULL,
    start timestamp without time zone NOT NULL,
    finish timestamp without time zone NOT NULL
);


ALTER TABLE public.service_charge OWNER TO postgres;

--
-- TOC entry 258 (class 1259 OID 25827)
-- Name: service_charge_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_charge_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.service_charge_id_seq OWNER TO postgres;

--
-- TOC entry 3445 (class 0 OID 0)
-- Dependencies: 258
-- Name: service_charge_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_charge_id_seq OWNED BY public.service_charge.id;


--
-- TOC entry 259 (class 1259 OID 25829)
-- Name: state; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.state (
    id integer NOT NULL,
    order_id integer NOT NULL,
    description character varying(50) NOT NULL,
    "time" timestamp without time zone NOT NULL
);


ALTER TABLE public.state OWNER TO postgres;

--
-- TOC entry 260 (class 1259 OID 25832)
-- Name: state_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.state_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.state_id_seq OWNER TO postgres;

--
-- TOC entry 3446 (class 0 OID 0)
-- Dependencies: 260
-- Name: state_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.state_id_seq OWNED BY public.state.id;


--
-- TOC entry 261 (class 1259 OID 25834)
-- Name: voucher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voucher (
    id integer NOT NULL,
    order_id integer NOT NULL,
    "time" timestamp without time zone NOT NULL,
    coin_history_id integer
);


ALTER TABLE public.voucher OWNER TO postgres;

--
-- TOC entry 262 (class 1259 OID 25837)
-- Name: voucher_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voucher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.voucher_id_seq OWNER TO postgres;

--
-- TOC entry 3447 (class 0 OID 0)
-- Dependencies: 262
-- Name: voucher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voucher_id_seq OWNED BY public.voucher.id;


--
-- TOC entry 3065 (class 2604 OID 25839)
-- Name: addon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addon ALTER COLUMN id SET DEFAULT nextval('public.addon_id_seq'::regclass);


--
-- TOC entry 3066 (class 2604 OID 25840)
-- Name: address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- TOC entry 3067 (class 2604 OID 25841)
-- Name: admin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);


--
-- TOC entry 3068 (class 2604 OID 25842)
-- Name: cart id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);


--
-- TOC entry 3069 (class 2604 OID 25843)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 3070 (class 2604 OID 25844)
-- Name: coin_history id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_history ALTER COLUMN id SET DEFAULT nextval('public.coin_history_id_seq'::regclass);


--
-- TOC entry 3071 (class 2604 OID 25845)
-- Name: coin_use_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_use_type ALTER COLUMN id SET DEFAULT nextval('public.coin_use_type_id_seq'::regclass);


--
-- TOC entry 3072 (class 2604 OID 25846)
-- Name: customer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);


--
-- TOC entry 3073 (class 2604 OID 25847)
-- Name: customer_address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_address ALTER COLUMN id SET DEFAULT nextval('public.customer_address_id_seq'::regclass);


--
-- TOC entry 3074 (class 2604 OID 25848)
-- Name: customer_image id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_image ALTER COLUMN id SET DEFAULT nextval('public.customer_image_id_seq'::regclass);


--
-- TOC entry 3075 (class 2604 OID 25849)
-- Name: delivery_address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery_address ALTER COLUMN id SET DEFAULT nextval('public.delivery_address_id_seq'::regclass);


--
-- TOC entry 3076 (class 2604 OID 25850)
-- Name: gift_info id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gift_info ALTER COLUMN id SET DEFAULT nextval('public.gift_info_id_seq'::regclass);


--
-- TOC entry 3077 (class 2604 OID 25851)
-- Name: invoice id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice ALTER COLUMN id SET DEFAULT nextval('public.invoice_id_seq'::regclass);


--
-- TOC entry 3078 (class 2604 OID 25852)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 3097 (class 2604 OID 26195)
-- Name: item_addon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_addon ALTER COLUMN id SET DEFAULT nextval('public.item_addon_id_seq'::regclass);


--
-- TOC entry 3099 (class 2604 OID 26232)
-- Name: item_category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_category ALTER COLUMN id SET DEFAULT nextval('public.item_category_id_seq'::regclass);


--
-- TOC entry 3098 (class 2604 OID 26221)
-- Name: item_image id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_image ALTER COLUMN id SET DEFAULT nextval('public.item_image_id_seq'::regclass);


--
-- TOC entry 3079 (class 2604 OID 25853)
-- Name: item_review id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_review ALTER COLUMN id SET DEFAULT nextval('public.item_review_id_seq'::regclass);


--
-- TOC entry 3081 (class 2604 OID 25854)
-- Name: normal_order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.normal_order ALTER COLUMN id SET DEFAULT nextval('public.orderr_id_seq'::regclass);


--
-- TOC entry 3080 (class 2604 OID 25855)
-- Name: orderr id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr ALTER COLUMN id SET DEFAULT nextval('public.orderr_id_seq'::regclass);


--
-- TOC entry 3082 (class 2604 OID 25856)
-- Name: payment_info id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_info ALTER COLUMN id SET DEFAULT nextval('public.payment_info_id_seq'::regclass);


--
-- TOC entry 3083 (class 2604 OID 25857)
-- Name: pickup id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pickup ALTER COLUMN id SET DEFAULT nextval('public.orderr_id_seq'::regclass);


--
-- TOC entry 3084 (class 2604 OID 25858)
-- Name: pre_order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pre_order ALTER COLUMN id SET DEFAULT nextval('public.orderr_id_seq'::regclass);


--
-- TOC entry 3085 (class 2604 OID 25859)
-- Name: promo_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo_type ALTER COLUMN id SET DEFAULT nextval('public.promo_type_id_seq'::regclass);


--
-- TOC entry 3086 (class 2604 OID 25860)
-- Name: promo_use id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo_use ALTER COLUMN id SET DEFAULT nextval('public.promo_use_id_seq'::regclass);


--
-- TOC entry 3087 (class 2604 OID 25861)
-- Name: restaurant id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant ALTER COLUMN id SET DEFAULT nextval('public.restaurant_id_seq'::regclass);


--
-- TOC entry 3088 (class 2604 OID 25862)
-- Name: restaurant_address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_address ALTER COLUMN id SET DEFAULT nextval('public.restaurant_address_id_seq'::regclass);


--
-- TOC entry 3089 (class 2604 OID 25863)
-- Name: restaurant_image id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_image ALTER COLUMN id SET DEFAULT nextval('public.restaurant_image_id_seq'::regclass);


--
-- TOC entry 3090 (class 2604 OID 25864)
-- Name: restaurant_manager id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_manager ALTER COLUMN id SET DEFAULT nextval('public.restaurant_manager_id_seq'::regclass);


--
-- TOC entry 3091 (class 2604 OID 25865)
-- Name: restaurant_review id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_review ALTER COLUMN id SET DEFAULT nextval('public.restaurant_review_id_seq'::regclass);


--
-- TOC entry 3092 (class 2604 OID 25866)
-- Name: rush_order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rush_order ALTER COLUMN id SET DEFAULT nextval('public.orderr_id_seq'::regclass);


--
-- TOC entry 3093 (class 2604 OID 25867)
-- Name: search_history id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.search_history ALTER COLUMN id SET DEFAULT nextval('public.search_history_id_seq'::regclass);


--
-- TOC entry 3094 (class 2604 OID 25868)
-- Name: service_charge id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_charge ALTER COLUMN id SET DEFAULT nextval('public.service_charge_id_seq'::regclass);


--
-- TOC entry 3095 (class 2604 OID 25869)
-- Name: state id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.state ALTER COLUMN id SET DEFAULT nextval('public.state_id_seq'::regclass);


--
-- TOC entry 3096 (class 2604 OID 25870)
-- Name: voucher id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher ALTER COLUMN id SET DEFAULT nextval('public.voucher_id_seq'::regclass);


--
-- TOC entry 3342 (class 0 OID 25657)
-- Dependencies: 200
-- Data for Name: addon; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.addon (id, name, price, count) VALUES (100, 'Chicken Sauce', 180, 1);
INSERT INTO public.addon (id, name, price, count) VALUES (102, 'Curry', 300, 1);
INSERT INTO public.addon (id, name, price, count) VALUES (101, 'Beef Kolija', 250, 1);


--
-- TOC entry 3344 (class 0 OID 25662)
-- Dependencies: 202
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.address (id, location, block, road, house, apartment, postal_code, start, finish) VALUES (100, 'Buet', 'Buet', 'Polashi', 'Buet', 'Sorkari', '200', '2019-03-03 10:10:10', '2019-03-03 10:10:10');
INSERT INTO public.address (id, location, block, road, house, apartment, postal_code, start, finish) VALUES (110, 'Bakshibazar', 'Bakshibazar', 'DMC', 'Our house', 'B-08', '200', '2019-03-03 10:10:10', '2019-03-03 10:10:10');


--
-- TOC entry 3346 (class 0 OID 25667)
-- Dependencies: 204
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.admin (id, name, dob, phone, email) VALUES (10, 'Mehedi Imon', '1998-04-08 00:00:00', '01821018181', 'worstemon8@gmail.com');
INSERT INTO public.admin (id, name, dob, phone, email) VALUES (15, 'Asif Piyal', '1998-05-11 00:00:00', '01821462352', 'boroloxpiyal@gmail.com');


--
-- TOC entry 3348 (class 0 OID 25672)
-- Dependencies: 206
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cart (id, restaurant_id, customer_id, order_time, delivery_time, total_price, order_id) VALUES (1000, 200, 100, '2020-03-15 15:30:10', '2020-03-15 16:00:10', 450, NULL);
INSERT INTO public.cart (id, restaurant_id, customer_id, order_time, delivery_time, total_price, order_id) VALUES (1010, 210, 101, '2020-03-15 17:30:10', '2020-03-15 17:00:10', 675, NULL);
INSERT INTO public.cart (id, restaurant_id, customer_id, order_time, delivery_time, total_price, order_id) VALUES (1015, 215, 103, '2020-04-12 10:30:10', '2020-04-12 11:00:10', 1000, NULL);


--
-- TOC entry 3350 (class 0 OID 25677)
-- Dependencies: 208
-- Data for Name: cart_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cart_item (id, item_id, cart_id, total_price, count) VALUES (100, 10, 1000, 200, 1);
INSERT INTO public.cart_item (id, item_id, cart_id, total_price, count) VALUES (101, 11, 1010, 250, 1);
INSERT INTO public.cart_item (id, item_id, cart_id, total_price, count) VALUES (102, 12, 1015, 300, 1);


--
-- TOC entry 3351 (class 0 OID 25680)
-- Dependencies: 209
-- Data for Name: cart_item_addon; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cart_item_addon (id, cart_item_id, addon_id, total_price, count) VALUES (100, 100, 100, 150, 1);
INSERT INTO public.cart_item_addon (id, cart_item_id, addon_id, total_price, count) VALUES (101, 101, 101, 250, 1);
INSERT INTO public.cart_item_addon (id, cart_item_id, addon_id, total_price, count) VALUES (102, 102, 102, 300, 1);


--
-- TOC entry 3352 (class 0 OID 25683)
-- Dependencies: 210
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.category (id, restaurant_id, name) VALUES (100, 200, 'Biriyani');
INSERT INTO public.category (id, restaurant_id, name) VALUES (101, 210, 'Burger');
INSERT INTO public.category (id, restaurant_id, name) VALUES (102, 210, 'Steak');
INSERT INTO public.category (id, restaurant_id, name) VALUES (103, 215, 'Chicken');
INSERT INTO public.category (id, restaurant_id, name) VALUES (104, 215, 'Beef');
INSERT INTO public.category (id, restaurant_id, name) VALUES (105, 215, 'Mutton');


--
-- TOC entry 3354 (class 0 OID 25688)
-- Dependencies: 212
-- Data for Name: coin_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.coin_history (id, coin_use_type_id, customer_id, voucher_id, "time") VALUES (100, 100, 100, 100, '2021-03-04 09:15:11');
INSERT INTO public.coin_history (id, coin_use_type_id, customer_id, voucher_id, "time") VALUES (101, 101, 101, 101, '2021-03-04 09:15:11');
INSERT INTO public.coin_history (id, coin_use_type_id, customer_id, voucher_id, "time") VALUES (102, 102, 102, 102, '2021-03-04 09:15:11');
INSERT INTO public.coin_history (id, coin_use_type_id, customer_id, voucher_id, "time") VALUES (103, 103, 103, 103, '2021-03-04 09:15:11');


--
-- TOC entry 3356 (class 0 OID 25693)
-- Dependencies: 214
-- Data for Name: coin_use_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.coin_use_type (id, admin_id, available_data, coin_amount, voucher_amount) VALUES (100, 10, '1000', 100, 15);
INSERT INTO public.coin_use_type (id, admin_id, available_data, coin_amount, voucher_amount) VALUES (101, 10, '1000', 100, 15);
INSERT INTO public.coin_use_type (id, admin_id, available_data, coin_amount, voucher_amount) VALUES (102, 10, '500', 50, 25);
INSERT INTO public.coin_use_type (id, admin_id, available_data, coin_amount, voucher_amount) VALUES (103, 15, '1500', 50, 25);
INSERT INTO public.coin_use_type (id, admin_id, available_data, coin_amount, voucher_amount) VALUES (104, 15, '1200', 75, 30);


--
-- TOC entry 3358 (class 0 OID 25698)
-- Dependencies: 216
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.customer (id, name, current_coin, current_address_id, customer_image_id) VALUES (103, 'Taufiqun Nur Farid', 5000, 125, NULL);
INSERT INTO public.customer (id, name, current_coin, current_address_id, customer_image_id) VALUES (104, 'Monirul Haq Imon', 100, 130, NULL);
INSERT INTO public.customer (id, name, current_coin, current_address_id, customer_image_id) VALUES (105, 'Shahriar Tanmay', 2000, 135, NULL);
INSERT INTO public.customer (id, name, current_coin, current_address_id, customer_image_id) VALUES (100, 'Souvik das', 5000, 110, 100);
INSERT INTO public.customer (id, name, current_coin, current_address_id, customer_image_id) VALUES (101, 'Mehedi Hasan Riga', 2000, 115, 101);
INSERT INTO public.customer (id, name, current_coin, current_address_id, customer_image_id) VALUES (102, 'Asif Mustafa Hasan', 3000, 120, 102);


--
-- TOC entry 3359 (class 0 OID 25701)
-- Dependencies: 217
-- Data for Name: customer_address; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.customer_address (id, customer_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (115, 101, 'Buet', 'Shere bangla', 'Polashi', 'Sorkari', 'none', '200', '1/1/2020', '10/1/2020');
INSERT INTO public.customer_address (id, customer_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (120, 102, 'Buet', 'Titumir', 'Polashi', 'Sorkari', 'none', '200', '1/1/2020', '10/1/2020');
INSERT INTO public.customer_address (id, customer_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (125, 103, 'Buet', 'Suhrawardi', 'Polashi', 'Sorkari', 'none', '200', '1/1/2020', '10/1/2020');
INSERT INTO public.customer_address (id, customer_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (130, 104, 'Buet', 'Nazrul', 'Polashi', 'Sorkari', 'none', '200', '1/1/2020', '10/1/2020');
INSERT INTO public.customer_address (id, customer_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (135, 105, 'Buet', 'Chattri', 'Polashi', 'Sorkari', 'none', '200', '1/1/2020', '10/1/2020');
INSERT INTO public.customer_address (id, customer_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (110, 100, 'Buet', 'Ahsanullah', 'Polashi', 'Sorkari', 'none', '200', '1/1/2020', '10/1/2020');


--
-- TOC entry 3362 (class 0 OID 25708)
-- Dependencies: 220
-- Data for Name: customer_image; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.customer_image (id, customer_id, link, "time") VALUES (100, 100, 'www.kichuekta.com', '2021-03-04 10:10:10');
INSERT INTO public.customer_image (id, customer_id, link, "time") VALUES (101, 101, 'www.JANINAA.com', '2021-03-04 10:10:10');
INSERT INTO public.customer_image (id, customer_id, link, "time") VALUES (102, 102, 'www.something.com', '2021-03-04 10:10:10');


--
-- TOC entry 3364 (class 0 OID 25713)
-- Dependencies: 222
-- Data for Name: delivery_address; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.delivery_address (id, location, block, road, house, apartment, postal_code, order_id) VALUES (100, 'Buet', 'Bakshibazar', 'Palashi', 'Ahsanullah hall', 'Room 233', '200', NULL);
INSERT INTO public.delivery_address (id, location, block, road, house, apartment, postal_code, order_id) VALUES (101, 'Buet', 'Bakshibazar', 'Palashi', 'Rashid hall', 'Room 5001', '200', NULL);
INSERT INTO public.delivery_address (id, location, block, road, house, apartment, postal_code, order_id) VALUES (102, 'Dhanmondi', 'Jigatola', 'Dhanmondi 5', 'Chitra', 'C-5', '300', NULL);


--
-- TOC entry 3366 (class 0 OID 25718)
-- Dependencies: 224
-- Data for Name: gift_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.gift_info (id, order_id, name, phone) VALUES (100, 100, 'Buy 1 get 1', '01535151414');
INSERT INTO public.gift_info (id, order_id, name, phone) VALUES (101, 101, 'Get 150 discount on over 500 taka order', '01535151422');
INSERT INTO public.gift_info (id, order_id, name, phone) VALUES (102, 102, 'Get 200 taka discount on first order', '015351522424');
INSERT INTO public.gift_info (id, order_id, name, phone) VALUES (2, 100, 'hehe', '12');
INSERT INTO public.gift_info (id, order_id, name, phone) VALUES (3, 100, 'hehe', '012');
INSERT INTO public.gift_info (id, order_id, name, phone) VALUES (5, 100, 'heha', '012');


--
-- TOC entry 3368 (class 0 OID 25723)
-- Dependencies: 226
-- Data for Name: invoice; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.invoice (id, order_id, vat_amount, delivery_fee, total_price) VALUES (100, 100, 5, 15, 1000);
INSERT INTO public.invoice (id, order_id, vat_amount, delivery_fee, total_price) VALUES (101, 101, 10, 25, 575);
INSERT INTO public.invoice (id, order_id, vat_amount, delivery_fee, total_price) VALUES (102, 102, 15, 30, 600);


--
-- TOC entry 3370 (class 0 OID 25728)
-- Dependencies: 228
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.item (id, name, description, count, rating) VALUES (10, 'Beef biriyani', 'Beef,potato and special masala', 1, 4.6);
INSERT INTO public.item (id, name, description, count, rating) VALUES (11, 'Mutton Kacchi', 'Basmati rice, 2 piece mutton, 2 piece potato', 1, 4.9);
INSERT INTO public.item (id, name, description, count, rating) VALUES (12, 'Chicken Burger', '350 gm patty and fresh bun', 1, 4.2);
INSERT INTO public.item (id, name, description, count, rating) VALUES (13, 'French fry', 'Fresh fries with sauce', 1, 4.1);
INSERT INTO public.item (id, name, description, count, rating) VALUES (1, 'Chicken Biriyani', 'Chicken, potato and special masala', 100, 4.7);


--
-- TOC entry 3406 (class 0 OID 26192)
-- Dependencies: 264
-- Data for Name: item_addon; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.item_addon (id, item_id, addon_id) VALUES (9, 12, 100);
INSERT INTO public.item_addon (id, item_id, addon_id) VALUES (10, 13, 100);
INSERT INTO public.item_addon (id, item_id, addon_id) VALUES (11, 10, 101);
INSERT INTO public.item_addon (id, item_id, addon_id) VALUES (12, 11, 101);
INSERT INTO public.item_addon (id, item_id, addon_id) VALUES (13, 12, 101);
INSERT INTO public.item_addon (id, item_id, addon_id) VALUES (14, 13, 101);
INSERT INTO public.item_addon (id, item_id, addon_id) VALUES (15, 10, 102);
INSERT INTO public.item_addon (id, item_id, addon_id) VALUES (16, 11, 102);


--
-- TOC entry 3410 (class 0 OID 26229)
-- Dependencies: 268
-- Data for Name: item_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.item_category (id, item_id, category_id) VALUES (1, 11, 105);
INSERT INTO public.item_category (id, item_id, category_id) VALUES (2, 10, 104);
INSERT INTO public.item_category (id, item_id, category_id) VALUES (3, 12, 103);
INSERT INTO public.item_category (id, item_id, category_id) VALUES (4, 13, 103);


--
-- TOC entry 3408 (class 0 OID 26218)
-- Dependencies: 266
-- Data for Name: item_image; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.item_image (id, image_id, item_id) VALUES (1, 1, 10);
INSERT INTO public.item_image (id, image_id, item_id) VALUES (2, 2, 12);
INSERT INTO public.item_image (id, image_id, item_id) VALUES (3, 3, 12);
INSERT INTO public.item_image (id, image_id, item_id) VALUES (4, 4, 11);
INSERT INTO public.item_image (id, image_id, item_id) VALUES (5, 5, 11);


--
-- TOC entry 3372 (class 0 OID 25733)
-- Dependencies: 230
-- Data for Name: item_review; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.item_review (id, item_id, order_id, rating, description) VALUES (10, 10, 100, 3.4, 'Food was cold, and delivery was late');
INSERT INTO public.item_review (id, item_id, order_id, rating, description) VALUES (11, 11, 101, 4.2, 'Very tasty food and fast service, saved my day');
INSERT INTO public.item_review (id, item_id, order_id, rating, description) VALUES (12, 12, 102, 4.5, 'Satisfactory experience');


--
-- TOC entry 3375 (class 0 OID 25747)
-- Dependencies: 233
-- Data for Name: normal_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.normal_order (id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, payment_info_id, promo_use_id, voucher_id, invoice_id, gift_info_id, restaurant_review_id, estimated_time) VALUES (100, 1000, 100, 100, '01521431424', 'normal', 100, NULL, 6, 100, NULL, 100, '2021-05-04 10:10:10');


--
-- TOC entry 3374 (class 0 OID 25741)
-- Dependencies: 232
-- Data for Name: orderr; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.orderr (id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, payment_info_id, promo_use_id, voucher_id, invoice_id, gift_info_id, restaurant_review_id) VALUES (101, 1010, 101, 100, '01531414143', 'pre_order', 101, 101, 101, 101, 101, 101);
INSERT INTO public.orderr (id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, payment_info_id, promo_use_id, voucher_id, invoice_id, gift_info_id, restaurant_review_id) VALUES (102, 1015, 102, 101, '01531414146', 'rush_order', 102, 102, 102, 102, 102, 102);
INSERT INTO public.orderr (id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, payment_info_id, promo_use_id, voucher_id, invoice_id, gift_info_id, restaurant_review_id) VALUES (100, 1000, 100, 100, '01531414143', 'normal', 100, NULL, 6, 100, NULL, 100);


--
-- TOC entry 3377 (class 0 OID 25755)
-- Dependencies: 235
-- Data for Name: payment_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.payment_info (id, order_id, account_no, type, payment_time, transaction_id) VALUES (100, 100, '11314144', 'Bank transfer', '09:15:11', '12345');
INSERT INTO public.payment_info (id, order_id, account_no, type, payment_time, transaction_id) VALUES (101, 101, '113113131', 'Mobile banking', '09:15:11', '1234556');
INSERT INTO public.payment_info (id, order_id, account_no, type, payment_time, transaction_id) VALUES (102, 102, '1131113', 'Cash on delivery', '09:15:11', '3515515');


--
-- TOC entry 3379 (class 0 OID 25760)
-- Dependencies: 237
-- Data for Name: pickup; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3380 (class 0 OID 25766)
-- Dependencies: 238
-- Data for Name: pre_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pre_order (id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, payment_info_id, promo_use_id, voucher_id, invoice_id, gift_info_id, restaurant_review_id, target_time) VALUES (100, 101, 101, 101, '01712141411', 'pre_order', 100, NULL, 6, 100, NULL, 100, '2021-05-06 10:10:10');


--
-- TOC entry 3381 (class 0 OID 25772)
-- Dependencies: 239
-- Data for Name: promo; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.promo (id, promo_type_id, admin_id, min_amount, max_count, start_time, finish_time) VALUES (100, 100, 10, 100, 1000, '2021-03-04 09:15:11', '2021-04-04 09:15:11');
INSERT INTO public.promo (id, promo_type_id, admin_id, min_amount, max_count, start_time, finish_time) VALUES (101, 101, 10, 50, 1500, '2021-03-04 09:15:11', '2021-04-04 09:15:11');
INSERT INTO public.promo (id, promo_type_id, admin_id, min_amount, max_count, start_time, finish_time) VALUES (102, 102, 15, 75, 1200, '2021-03-04 09:15:11', '2021-04-04 09:15:11');


--
-- TOC entry 3382 (class 0 OID 25775)
-- Dependencies: 240
-- Data for Name: promo_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.promo_type (id, type, owner_id, value, owner_type) VALUES (100, 'Discount', 100, 25, 'Admin');
INSERT INTO public.promo_type (id, type, owner_id, value, owner_type) VALUES (101, 'Buy one get one', 100, 100, 'Admin');
INSERT INTO public.promo_type (id, type, owner_id, value, owner_type) VALUES (102, 'Get 50% on first order', 101, 75, 'Admin');


--
-- TOC entry 3384 (class 0 OID 25780)
-- Dependencies: 242
-- Data for Name: promo_use; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.promo_use (id, promo_id, order_id, "time") VALUES (100, 100, 100, '2021-03-04 09:15:11');
INSERT INTO public.promo_use (id, promo_id, order_id, "time") VALUES (101, 101, 101, '2021-03-04 09:15:11');
INSERT INTO public.promo_use (id, promo_id, order_id, "time") VALUES (102, 102, 102, '2021-03-04 09:15:11');


--
-- TOC entry 3386 (class 0 OID 25785)
-- Dependencies: 244
-- Data for Name: restaurant; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.restaurant (id, name, location, rating, current_service_charge_id, current_address_id, restaurant_manager_id) VALUES (210, 'Meat Theory', 'Banani', 4.4, 105, 110, NULL);
INSERT INTO public.restaurant (id, name, location, rating, current_service_charge_id, current_address_id, restaurant_manager_id) VALUES (215, 'Kabab fort', 'Lalbagh', 4.2, 110, 115, NULL);
INSERT INTO public.restaurant (id, name, location, rating, current_service_charge_id, current_address_id, restaurant_manager_id) VALUES (200, 'Sultans Dine', 'Dhanmondi', 4.8, 100, 100, NULL);
INSERT INTO public.restaurant (id, name, location, rating, current_service_charge_id, current_address_id, restaurant_manager_id) VALUES (220, 'Woodhouse', 'Banani', 4.5, 115, 120, NULL);


--
-- TOC entry 3387 (class 0 OID 25788)
-- Dependencies: 245
-- Data for Name: restaurant_address; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.restaurant_address (id, restaurant_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (101, 210, 'Banani', '2', 'Banani-11', 'Grand tower', 'Fourth floor', '200', '2020-01-01 09:00:00', '2020-01-01 21:00:00');
INSERT INTO public.restaurant_address (id, restaurant_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (102, 215, 'Lalbagh', '3', 'Lalbagh more', 'Lalbagh fort', 'Fifth floor', '200', '2020-01-01 09:00:00', '2020-01-01 21:00:00');
INSERT INTO public.restaurant_address (id, restaurant_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (103, 220, 'Banani', '4', 'Banani-6', 'Meat king', 'Fifth floor', '200', '2020-01-01 09:00:00', '2020-01-01 21:00:00');
INSERT INTO public.restaurant_address (id, restaurant_id, location, block, road, house, apartment, postal_code, start, finish) VALUES (115, 200, 'Dhanmondi', 'Jigatola', 'Bus stand', 'SF tower', 'Third floor', '200', '2020-01-01 09:00:00', '2020-01-01 21:00:00');


--
-- TOC entry 3390 (class 0 OID 25795)
-- Dependencies: 248
-- Data for Name: restaurant_image; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3392 (class 0 OID 25800)
-- Dependencies: 250
-- Data for Name: restaurant_manager; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.restaurant_manager (id, restaurant_id, address_id, name, dob, phone, email) VALUES (100, 200, 100, 'Shahriar Tanmay', '1998-05-06 00:00:00', '01521341441', 'tanmay111@gmail.com');
INSERT INTO public.restaurant_manager (id, restaurant_id, address_id, name, dob, phone, email) VALUES (101, 210, 110, 'Vergil', '1998-06-08 00:00:00', '01521451253', 'vergil@gmail.com');
INSERT INTO public.restaurant_manager (id, restaurant_id, address_id, name, dob, phone, email) VALUES (102, 215, 110, 'Gary Frost', '1995-06-08 00:00:00', '01710310811', 'sanderson@gmail.com');
INSERT INTO public.restaurant_manager (id, restaurant_id, address_id, name, dob, phone, email) VALUES (103, 220, 110, 'Grinch Sanderson', '1995-03-08 00:00:00', '01710310141', 'grinch@gmail.com');


--
-- TOC entry 3394 (class 0 OID 25805)
-- Dependencies: 252
-- Data for Name: restaurant_review; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.restaurant_review (id, restaurant_id, order_id, rating, description) VALUES (100, 200, 100, 4.5, 'Nice palce to hang out');
INSERT INTO public.restaurant_review (id, restaurant_id, order_id, rating, description) VALUES (101, 210, 101, 4.2, 'Nice and fresh food');
INSERT INTO public.restaurant_review (id, restaurant_id, order_id, rating, description) VALUES (102, 215, 102, 4.1, 'Food and service both were good');


--
-- TOC entry 3396 (class 0 OID 25813)
-- Dependencies: 254
-- Data for Name: rush_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.rush_order (id, cart_id, delivery_address_id, restaurant_manager_id, phone, name, payment_info_id, promo_use_id, voucher_id, invoice_id, gift_info_id, restaurant_review_id, maximum_time, estimated_time) VALUES (100, 102, 102, 100, '01634141411', 'rush_order', 100, NULL, 6, 100, NULL, 100, '2021-03-04 12:10:20', '2021-03-04 12:00:20');


--
-- TOC entry 3397 (class 0 OID 25819)
-- Dependencies: 255
-- Data for Name: search_history; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3399 (class 0 OID 25824)
-- Dependencies: 257
-- Data for Name: service_charge; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3401 (class 0 OID 25829)
-- Dependencies: 259
-- Data for Name: state; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3403 (class 0 OID 25834)
-- Dependencies: 261
-- Data for Name: voucher; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.voucher (id, order_id, "time", coin_history_id) VALUES (100, 100, '2021-04-05 11:10:10', 100);
INSERT INTO public.voucher (id, order_id, "time", coin_history_id) VALUES (101, 101, '2021-04-05 11:10:10', 101);
INSERT INTO public.voucher (id, order_id, "time", coin_history_id) VALUES (102, 102, '2021-04-05 11:10:10', 102);
INSERT INTO public.voucher (id, order_id, "time", coin_history_id) VALUES (1, 100, '2022-02-19 19:44:49.368216', NULL);
INSERT INTO public.voucher (id, order_id, "time", coin_history_id) VALUES (4, 100, '2022-02-19 19:44:49.368216', NULL);
INSERT INTO public.voucher (id, order_id, "time", coin_history_id) VALUES (5, 100, '2022-02-19 19:44:49.368216', NULL);
INSERT INTO public.voucher (id, order_id, "time", coin_history_id) VALUES (6, 100, '2022-02-28 19:44:49.368216', NULL);
INSERT INTO public.voucher (id, order_id, "time", coin_history_id) VALUES (2, 101, '2022-02-19 19:45:24.465329', 100);


--
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 201
-- Name: addon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.addon_id_seq', 1, false);


--
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 203
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_id_seq', 1, false);


--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 205
-- Name: admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_id_seq', 1, false);


--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 207
-- Name: cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cart_id_seq', 1, false);


--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 211
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 213
-- Name: coin_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coin_history_id_seq', 1, false);


--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 215
-- Name: coin_use_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coin_use_type_id_seq', 1, false);


--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 218
-- Name: customer_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_address_id_seq', 1, false);


--
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 219
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 1, false);


--
-- TOC entry 3457 (class 0 OID 0)
-- Dependencies: 221
-- Name: customer_image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_image_id_seq', 1, false);


--
-- TOC entry 3458 (class 0 OID 0)
-- Dependencies: 223
-- Name: delivery_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.delivery_address_id_seq', 1, false);


--
-- TOC entry 3459 (class 0 OID 0)
-- Dependencies: 225
-- Name: gift_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gift_info_id_seq', 5, true);


--
-- TOC entry 3460 (class 0 OID 0)
-- Dependencies: 227
-- Name: invoice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoice_id_seq', 1, false);


--
-- TOC entry 3461 (class 0 OID 0)
-- Dependencies: 263
-- Name: item_addon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_addon_id_seq', 16, true);


--
-- TOC entry 3462 (class 0 OID 0)
-- Dependencies: 267
-- Name: item_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_category_id_seq', 1, false);


--
-- TOC entry 3463 (class 0 OID 0)
-- Dependencies: 229
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 1, true);


--
-- TOC entry 3464 (class 0 OID 0)
-- Dependencies: 265
-- Name: item_image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_image_id_seq', 5, true);


--
-- TOC entry 3465 (class 0 OID 0)
-- Dependencies: 231
-- Name: item_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_review_id_seq', 1, false);


--
-- TOC entry 3466 (class 0 OID 0)
-- Dependencies: 234
-- Name: orderr_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orderr_id_seq', 1, false);


--
-- TOC entry 3467 (class 0 OID 0)
-- Dependencies: 236
-- Name: payment_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_info_id_seq', 1, false);


--
-- TOC entry 3468 (class 0 OID 0)
-- Dependencies: 241
-- Name: promo_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.promo_type_id_seq', 1, false);


--
-- TOC entry 3469 (class 0 OID 0)
-- Dependencies: 243
-- Name: promo_use_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.promo_use_id_seq', 1, false);


--
-- TOC entry 3470 (class 0 OID 0)
-- Dependencies: 246
-- Name: restaurant_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurant_address_id_seq', 1, false);


--
-- TOC entry 3471 (class 0 OID 0)
-- Dependencies: 247
-- Name: restaurant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurant_id_seq', 1, false);


--
-- TOC entry 3472 (class 0 OID 0)
-- Dependencies: 249
-- Name: restaurant_image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurant_image_id_seq', 1, false);


--
-- TOC entry 3473 (class 0 OID 0)
-- Dependencies: 251
-- Name: restaurant_manager_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurant_manager_id_seq', 1, false);


--
-- TOC entry 3474 (class 0 OID 0)
-- Dependencies: 253
-- Name: restaurant_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurant_review_id_seq', 1, false);


--
-- TOC entry 3475 (class 0 OID 0)
-- Dependencies: 256
-- Name: search_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.search_history_id_seq', 1, false);


--
-- TOC entry 3476 (class 0 OID 0)
-- Dependencies: 258
-- Name: service_charge_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_charge_id_seq', 1, false);


--
-- TOC entry 3477 (class 0 OID 0)
-- Dependencies: 260
-- Name: state_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.state_id_seq', 1, false);


--
-- TOC entry 3478 (class 0 OID 0)
-- Dependencies: 262
-- Name: voucher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voucher_id_seq', 8, true);


--
-- TOC entry 3101 (class 2606 OID 25872)
-- Name: addon addon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addon
    ADD CONSTRAINT addon_pkey PRIMARY KEY (id);


--
-- TOC entry 3103 (class 2606 OID 25874)
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- TOC entry 3105 (class 2606 OID 25876)
-- Name: admin admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);


--
-- TOC entry 3111 (class 2606 OID 25878)
-- Name: cart_item_addon cart_item_addon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item_addon
    ADD CONSTRAINT cart_item_addon_pkey PRIMARY KEY (id);


--
-- TOC entry 3109 (class 2606 OID 25880)
-- Name: cart_item cart_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_pkey PRIMARY KEY (id);


--
-- TOC entry 3107 (class 2606 OID 25882)
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (id);


--
-- TOC entry 3113 (class 2606 OID 25884)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 3115 (class 2606 OID 25886)
-- Name: coin_history coin_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_history
    ADD CONSTRAINT coin_history_pkey PRIMARY KEY (id);


--
-- TOC entry 3117 (class 2606 OID 25888)
-- Name: coin_use_type coin_use_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_use_type
    ADD CONSTRAINT coin_use_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3121 (class 2606 OID 25890)
-- Name: customer_address customer_address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_address
    ADD CONSTRAINT customer_address_pkey PRIMARY KEY (id);


--
-- TOC entry 3123 (class 2606 OID 25892)
-- Name: customer_image customer_image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_image
    ADD CONSTRAINT customer_image_pkey PRIMARY KEY (id);


--
-- TOC entry 3119 (class 2606 OID 25894)
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- TOC entry 3125 (class 2606 OID 25896)
-- Name: delivery_address delivery_address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery_address
    ADD CONSTRAINT delivery_address_pkey PRIMARY KEY (id);


--
-- TOC entry 3127 (class 2606 OID 25898)
-- Name: gift_info gift_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gift_info
    ADD CONSTRAINT gift_info_pkey PRIMARY KEY (id);


--
-- TOC entry 3129 (class 2606 OID 25900)
-- Name: invoice invoice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_pkey PRIMARY KEY (id);


--
-- TOC entry 3131 (class 2606 OID 25902)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3133 (class 2606 OID 25904)
-- Name: item_review item_review_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_review
    ADD CONSTRAINT item_review_pkey PRIMARY KEY (id);


--
-- TOC entry 3135 (class 2606 OID 25906)
-- Name: orderr orderr_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT orderr_pkey PRIMARY KEY (id);


--
-- TOC entry 3137 (class 2606 OID 25908)
-- Name: payment_info payment_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_info
    ADD CONSTRAINT payment_info_pkey PRIMARY KEY (id);


--
-- TOC entry 3139 (class 2606 OID 25910)
-- Name: promo promo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo
    ADD CONSTRAINT promo_pkey PRIMARY KEY (id);


--
-- TOC entry 3141 (class 2606 OID 25912)
-- Name: promo_type promo_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo_type
    ADD CONSTRAINT promo_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3143 (class 2606 OID 25914)
-- Name: promo_use promo_use_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo_use
    ADD CONSTRAINT promo_use_pkey PRIMARY KEY (id);


--
-- TOC entry 3147 (class 2606 OID 25916)
-- Name: restaurant_address restaurant_address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_address
    ADD CONSTRAINT restaurant_address_pkey PRIMARY KEY (id);


--
-- TOC entry 3149 (class 2606 OID 25918)
-- Name: restaurant_image restaurant_image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_image
    ADD CONSTRAINT restaurant_image_pkey PRIMARY KEY (id);


--
-- TOC entry 3151 (class 2606 OID 25920)
-- Name: restaurant_manager restaurant_manager_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_manager
    ADD CONSTRAINT restaurant_manager_pkey PRIMARY KEY (id);


--
-- TOC entry 3145 (class 2606 OID 25922)
-- Name: restaurant restaurant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT restaurant_pkey PRIMARY KEY (id);


--
-- TOC entry 3153 (class 2606 OID 25924)
-- Name: restaurant_review restaurant_review_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_review
    ADD CONSTRAINT restaurant_review_pkey PRIMARY KEY (id);


--
-- TOC entry 3155 (class 2606 OID 25926)
-- Name: search_history search_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.search_history
    ADD CONSTRAINT search_history_pkey PRIMARY KEY (id);


--
-- TOC entry 3157 (class 2606 OID 25928)
-- Name: service_charge service_charge_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_charge
    ADD CONSTRAINT service_charge_pkey PRIMARY KEY (id);


--
-- TOC entry 3159 (class 2606 OID 25930)
-- Name: state state_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.state
    ADD CONSTRAINT state_pkey PRIMARY KEY (id);


--
-- TOC entry 3161 (class 2606 OID 25932)
-- Name: voucher voucher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher
    ADD CONSTRAINT voucher_pkey PRIMARY KEY (id);


--
-- TOC entry 3162 (class 2606 OID 25933)
-- Name: cart cart_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3167 (class 2606 OID 25938)
-- Name: cart_item_addon cart_item_addon_addon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item_addon
    ADD CONSTRAINT cart_item_addon_addon_id_fkey FOREIGN KEY (addon_id) REFERENCES public.addon(id);


--
-- TOC entry 3168 (class 2606 OID 25943)
-- Name: cart_item_addon cart_item_addon_cart_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item_addon
    ADD CONSTRAINT cart_item_addon_cart_item_id_fkey FOREIGN KEY (cart_item_id) REFERENCES public.cart_item(id);


--
-- TOC entry 3165 (class 2606 OID 25948)
-- Name: cart_item cart_item_cart_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_cart_id_fkey FOREIGN KEY (cart_id) REFERENCES public.cart(id);


--
-- TOC entry 3166 (class 2606 OID 25953)
-- Name: cart_item cart_item_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- TOC entry 3163 (class 2606 OID 25958)
-- Name: cart cart_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


--
-- TOC entry 3169 (class 2606 OID 25963)
-- Name: category category_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


--
-- TOC entry 3170 (class 2606 OID 25968)
-- Name: coin_history coin_history_coin_use_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_history
    ADD CONSTRAINT coin_history_coin_use_type_id_fkey FOREIGN KEY (coin_use_type_id) REFERENCES public.coin_use_type(id);


--
-- TOC entry 3171 (class 2606 OID 25973)
-- Name: coin_history coin_history_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_history
    ADD CONSTRAINT coin_history_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3205 (class 2606 OID 25978)
-- Name: voucher coin_history_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher
    ADD CONSTRAINT coin_history_id FOREIGN KEY (coin_history_id) REFERENCES public.coin_history(id);


--
-- TOC entry 3172 (class 2606 OID 25983)
-- Name: coin_use_type coin_use_type_admin_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_use_type
    ADD CONSTRAINT coin_use_type_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.admin(id);


--
-- TOC entry 3174 (class 2606 OID 25988)
-- Name: customer_address customer_address_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_address
    ADD CONSTRAINT customer_address_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3175 (class 2606 OID 25993)
-- Name: customer_image customer_image_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_image
    ADD CONSTRAINT customer_image_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3173 (class 2606 OID 25998)
-- Name: customer customer_image_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_image_id FOREIGN KEY (customer_image_id) REFERENCES public.customer_image(id);


--
-- TOC entry 3181 (class 2606 OID 26003)
-- Name: orderr gift_info_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT gift_info_id FOREIGN KEY (gift_info_id) REFERENCES public.gift_info(id);


--
-- TOC entry 3177 (class 2606 OID 26008)
-- Name: gift_info gift_info_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gift_info
    ADD CONSTRAINT gift_info_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3182 (class 2606 OID 26013)
-- Name: orderr invoice_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT invoice_id FOREIGN KEY (invoice_id) REFERENCES public.invoice(id);


--
-- TOC entry 3178 (class 2606 OID 26018)
-- Name: invoice invoice_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3208 (class 2606 OID 26201)
-- Name: item_addon item_addon_addon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_addon
    ADD CONSTRAINT item_addon_addon_id_fkey FOREIGN KEY (addon_id) REFERENCES public.addon(id);


--
-- TOC entry 3207 (class 2606 OID 26196)
-- Name: item_addon item_addon_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_addon
    ADD CONSTRAINT item_addon_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- TOC entry 3210 (class 2606 OID 26233)
-- Name: item_category item_category_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_category
    ADD CONSTRAINT item_category_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- TOC entry 3211 (class 2606 OID 26238)
-- Name: item_category item_category_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_category
    ADD CONSTRAINT item_category_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- TOC entry 3209 (class 2606 OID 26222)
-- Name: item_image item_image_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_image
    ADD CONSTRAINT item_image_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- TOC entry 3179 (class 2606 OID 26023)
-- Name: item_review item_review_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_review
    ADD CONSTRAINT item_review_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- TOC entry 3180 (class 2606 OID 26028)
-- Name: item_review item_review_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_review
    ADD CONSTRAINT item_review_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3176 (class 2606 OID 26033)
-- Name: delivery_address order_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery_address
    ADD CONSTRAINT order_id FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3164 (class 2606 OID 26038)
-- Name: cart order_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT order_id FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3183 (class 2606 OID 26043)
-- Name: orderr orderr_cart_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT orderr_cart_id_fkey FOREIGN KEY (cart_id) REFERENCES public.cart(id);


--
-- TOC entry 3184 (class 2606 OID 26048)
-- Name: orderr orderr_delivery_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT orderr_delivery_address_id_fkey FOREIGN KEY (delivery_address_id) REFERENCES public.delivery_address(id);


--
-- TOC entry 3185 (class 2606 OID 26053)
-- Name: orderr orderr_restaurant_manager_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT orderr_restaurant_manager_id_fkey FOREIGN KEY (restaurant_manager_id) REFERENCES public.restaurant_manager(id);


--
-- TOC entry 3186 (class 2606 OID 26058)
-- Name: orderr payment_info_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT payment_info_id FOREIGN KEY (payment_info_id) REFERENCES public.payment_info(id);


--
-- TOC entry 3190 (class 2606 OID 26063)
-- Name: payment_info payment_info_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_info
    ADD CONSTRAINT payment_info_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3191 (class 2606 OID 26068)
-- Name: promo promo_admin_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo
    ADD CONSTRAINT promo_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.admin(id);


--
-- TOC entry 3192 (class 2606 OID 26073)
-- Name: promo promo_promo_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo
    ADD CONSTRAINT promo_promo_type_id_fkey FOREIGN KEY (promo_type_id) REFERENCES public.promo_type(id);


--
-- TOC entry 3187 (class 2606 OID 26078)
-- Name: orderr promo_use_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT promo_use_id FOREIGN KEY (promo_use_id) REFERENCES public.promo_use(id);


--
-- TOC entry 3193 (class 2606 OID 26083)
-- Name: promo_use promo_use_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo_use
    ADD CONSTRAINT promo_use_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3194 (class 2606 OID 26088)
-- Name: promo_use promo_use_promo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.promo_use
    ADD CONSTRAINT promo_use_promo_id_fkey FOREIGN KEY (promo_id) REFERENCES public.promo(id);


--
-- TOC entry 3196 (class 2606 OID 26093)
-- Name: restaurant_address restaurant_address_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_address
    ADD CONSTRAINT restaurant_address_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


--
-- TOC entry 3197 (class 2606 OID 26098)
-- Name: restaurant_image restaurant_image_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_image
    ADD CONSTRAINT restaurant_image_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


--
-- TOC entry 3198 (class 2606 OID 26103)
-- Name: restaurant_manager restaurant_manager_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_manager
    ADD CONSTRAINT restaurant_manager_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.address(id);


--
-- TOC entry 3195 (class 2606 OID 26108)
-- Name: restaurant restaurant_manager_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT restaurant_manager_id FOREIGN KEY (restaurant_manager_id) REFERENCES public.restaurant_manager(id);


--
-- TOC entry 3199 (class 2606 OID 26113)
-- Name: restaurant_manager restaurant_manager_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_manager
    ADD CONSTRAINT restaurant_manager_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


--
-- TOC entry 3188 (class 2606 OID 26118)
-- Name: orderr restaurant_review_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT restaurant_review_id FOREIGN KEY (restaurant_review_id) REFERENCES public.restaurant_review(id);


--
-- TOC entry 3200 (class 2606 OID 26123)
-- Name: restaurant_review restaurant_review_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_review
    ADD CONSTRAINT restaurant_review_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3201 (class 2606 OID 26128)
-- Name: restaurant_review restaurant_review_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant_review
    ADD CONSTRAINT restaurant_review_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


--
-- TOC entry 3202 (class 2606 OID 26133)
-- Name: search_history search_history_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.search_history
    ADD CONSTRAINT search_history_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3203 (class 2606 OID 26138)
-- Name: service_charge service_charge_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_charge
    ADD CONSTRAINT service_charge_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


--
-- TOC entry 3204 (class 2606 OID 26143)
-- Name: state state_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.state
    ADD CONSTRAINT state_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orderr(id);


--
-- TOC entry 3189 (class 2606 OID 26148)
-- Name: orderr voucher_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderr
    ADD CONSTRAINT voucher_id FOREIGN KEY (voucher_id) REFERENCES public.voucher(id);


--
-- TOC entry 3206 (class 2606 OID 26153)
-- Name: voucher voucher_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher
    ADD CONSTRAINT voucher_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orderr(id);


-- Completed on 2022-02-20 00:09:57

--
-- PostgreSQL database dump complete
--

