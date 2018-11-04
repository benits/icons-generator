// file vendored from
// https://github.com/quicktype/figma-types/blob/4cc7c62554e8c3ed597b77c63876495e245581e7/figma.ts

/**
 * #TopLevel
 * GET /v1/files/:key
 *
 * > Description
 *
 * Returns the document refered to by :key as a JSON object. The file key can be parsed from
 * any Figma file url: https://www.figma.com/file/:key/:title. The "document" attribute
 * contains a Node of type DOCUMENT.
 *
 * The "components" key contains a mapping from node IDs to component metadata. This is to
 * help you determine which components each instance comes from. Currently the only piece of
 * metadata available on components is the name of the component, but more properties will
 * be forthcoming.
 *
 * > Path parameters
 *
 * key String
 * File to export JSON from
 */
export interface FileResponse {
  /**
   * The root node within the document
   */
  document: Document;
  /**
   * A mapping from node IDs to component metadata. This is to help you determine which
   * components each instance comes from. Currently the only piece of metadata available on
   * components is the name of the component, but more properties will be forthcoming.
   */
  components: { [key: string]: Component };

  schemaVersion: number;
}

/**
 * #TopLevel
 * GET /v1/files/:key/comments
 *
 * > Description
 * A list of comments left on the file.
 *
 * > Path parameters
 * key String
 * File to get comments from
 */
export interface CommentsResponse {
  comments: Comment[];
}

/**
 * #TopLevel
 * POST /v1/files/:key/comments
 *
 * > Description
 * Posts a new comment on the file.
 *
 * > Path parameters
 * key String
 * File to get comments from
 *
 * > Body parameters
 * message String
 * The text contents of the comment to post
 *
 * client_meta Vector2 | FrameOffset
 * The position of where to place the comment. This can either be an absolute canvas position or the relative position within a frame.
 *
 * > Return value
 * The Comment that was successfully posted
 *
 * > Error codes
 * 404 The specified file was not found
 */
export interface CommentRequest {
  message: string;
  client_meta: Vector2 | FrameOffset;
}

/**
 * #TopLevel
 * GET /v1/images/:key
 *
 * > Description
 * Renders images from a file.
 *
 * > Path parameters
 * key String
 * File to get images from
 */
export interface ImagesResponse {
  err: string;
  images: { [key: string]: string };
  status: number;
}

/**
 * #TopLevel
 * GET /v1/teams/:team_id/projects
 *
 * > Description
 * Lists the projects for a specified team. Note that this will only return projects visible to the authenticated user or owner of the developer token.
 *
 * > Path parameters
 * team_id String
 * Id of the team to list projects from
 */
export interface ProjectsResponse {
  projects: { id: number; name: string }[];
}

/**
 * #TopLevel
 * GET /v1/projects/:project_id/files
 *
 * > Description
 * List the files in a given project.
 *
 * > Path parameters
 * project_id String
 * Id of the project to list files from
 */
export interface ProjectFilesResponse {
  files: {
    key: string;
    name: string;
    thumbnail_url: string;

    /** utc date in iso8601 */
    last_modified: string;
  }[];
}

export interface Global {
  /** a string uniquely identifying this node within the document */
  id: string;
  /** the name given to the node by the user in the tool. */
  name: string;
  /** whether or not the node is visible on the canvas */
  visible: boolean;
  /** the type of the node, refer to table below for details */
  type: Node["type"];
}

export type Node =
  | Document
  | Canvas
  | Frame
  | Group
  | Vector
  | BooleanGroup
  | Star
  | Line
  | Ellipse
  | RegularPolygon
  | Rectangle
  | Text
  | Slice
  | Component
  | Instance;

/** Node Properties */

/** The root node */
export interface Document extends Global {
  type: "DOCUMENT";
  /** An array of canvases attached to the document */
  children: Node[];
}

/** Represents a single page */
export interface Canvas extends Global {
  type: "CANVAS";
  /** An array of top level layers on the canvas */
  children: Node[];
  /** Background color of the canvas */
  backgroundColor: Color;
  /** An array of export settings representing images to export from the canvas */
  exportSettings: ExportSetting[];
}

export interface FrameBase extends Global {
  /** An array of nodes that are direct children of this node */
  children: Node[];
  /** Background color of the node */
  backgroundColor: Color;
  /**
   * An array of export settings representing images to export from node
   * @default []
   */
  exportSettings: ExportSetting[];
  /**
   * How this node blends with nodes behind it in the scene
   * (see blend mode section for more details)
   */
  blendMode: BlendMode;
  /**
   * Keep height and width constrained to same ratio
   * @default false
   */
  preserveRatio: boolean;
  /** Horizontal and vertical layout constraints for node */
  constraints: LayoutConstraint;
  /**
   * Node ID of node to transition to in prototyping
   * @default null
   */
  transitionNodeID: string | null;
  /**
   * Opacity of the node
   * @default 1
   */
  opacity: number;
  /** Bounding box of the node in absolute space coordinates */
  absoluteBoundingBox: Rect;
  /** Does this node clip content outside of its bounds? */
  clipsContent: boolean;
  /**
   * An array of layout grids attached to this node (see layout grids section
   * for more details). GROUP nodes do not have this attribute
   * @default []
   */
  layoutGrids: LayoutGrid[];
  /**
   * An array of effects attached to this node
   * (see effects section for more details)
   * @default []
   */
  effects: Effect[];
  /**
   * Does this node mask sibling nodes in front of it?
   * @default false
   */
  isMask: boolean;
}

/** A node of fixed size containing other nodes */
export interface Frame extends FrameBase {
  type: "FRAME";
}

/** A logical grouping of nodes */
export interface Group extends FrameBase {
  type: "GROUP";
}

export interface VectorBase extends Global {
  /**
   * An array of export settings representing images to export from node
   * @default []
   */
  exportSettings: ExportSetting[];
  /**
   * How this node blends with nodes behind it in the scene
   * (see blend mode section for more details)
   */
  blendMode: BlendMode;
  /**
   * Keep height and width constrained to same ratio
   * @default false
   */
  preserveRatio: boolean;
  /**
   * Horizontal and vertical layout constraints for node
   */
  constraints: LayoutConstraint;
  /**
   * Node ID of node to transition to in prototyping
   * @default null
   */
  transitionNodeID: string | null;
  /**
   * Opacity of the node
   * @default 1
   */
  opacity: number;
  /** Bounding box of the node in absolute space coordinates */
  absoluteBoundingBox: Rect;
  /**
   * An array of effects attached to this node
   * (see effects section for more details)
   * @default []
   */
  effects: Effect[];
  /**
   * Does this node mask sibling nodes in front of it?
   * @default false
   */
  isMask: boolean;
  /**
   * An array of fill paints applied to the node
   * @default []
   */
  fills: Paint[];
  /**
   * An array of stroke paints applied to the node
   * @default []
   */
  strokes: Paint[];
  /** The weight of strokes on the node */
  strokeWeight: number;
  /**
   * Where stroke is drawn relative to the vector outline as a string enum
   * "INSIDE": draw stroke inside the shape boundary
   * "OUTSIDE": draw stroke outside the shape boundary
   * "CENTER": draw stroke centered along the shape boundary
   */
  strokeAlign: "INSIDE" | "OUTSIDE" | "CENTER";
}

/** A vector network, consisting of vertices and edges */
export interface Vector extends VectorBase {
  type: "VECTOR";
}

/** A group that has a boolean operation applied to it */
export interface BooleanGroup extends VectorBase {
  type: "BOOLEAN";
  /** An array of nodes that are being boolean operated on */
  children: Node[];
}

/** A regular star shape */
export interface Star extends VectorBase {
  type: "STAR";
}

/** A straight line */
export interface Line extends VectorBase {
  type: "LINE";
}

/** An ellipse */
export interface Ellipse extends VectorBase {
  type: "ELLIPSE";
}

/** A regular n-sided polygon */
export interface RegularPolygon extends VectorBase {
  type: "REGULAR_POLYGON";
}

/** A rectangle */
export interface Rectangle extends VectorBase {
  type: "RECTANGLE";
  /** Radius of each corner of the rectangle */
  cornerRadius: number;
}

/** A text box */
export interface Text extends VectorBase {
  type: "TEXT";
  /** Text contained within text box */
  characters: string;
  /**
   * Style of text including font family and weight (see type style
   * section for more information)
   */
  style: TypeStyle;
  /**
   * Array with same number of elements as characeters in text box,
   * each element is a reference to the styleOverrideTable defined
   * below and maps to the corresponding character in the characters
   * field. Elements with value 0 have the default type style
   */
  characterStyleOverrides: number[];
  /** Map from ID to TypeStyle for looking up style overrides */
  styleOverrideTable: { [index: number]: TypeStyle };
}

/** A rectangular region of the canvas that can be exported */
export interface Slice extends Global {
  type: "SLICE";
  /** An array of export settings representing images to export from this node */
  exportSettings: ExportSetting[];
  /** Bounding box of the node in absolute space coordinates */
  absoluteBoundingBox: Rect;
}

/** A node that can have instances created of it that share the same properties */
export interface Component extends FrameBase {
  type: "COMPONENT";
}

/**
 * An instance of a component, changes to the component result in the same
 * changes applied to the instance
 */
export interface Instance extends FrameBase {
  type: "INSTANCE";
  /**
   * ID of component that this instance came from, refers to components
   * table (see endpoints section below)
   */
  componentId: string;
}

/** An RGBA color */
export interface Color {
  /** Red channel value, between 0 and 1 */
  r: number;
  /** Green channel value, between 0 and 1 */
  g: number;
  /** Blue channel value, between 0 and 1 */
  b: number;
  /** Alpha channel value, between 0 and 1 */
  a: number;
}

/** Format and size to export an asset at */
export interface ExportSetting {
  /** File suffix to append to all filenames */
  suffix: string;
  /** Image type, string enum */
  format: "JPG" | "PNG" | "SVG";
  /** Constraint that determines sizing of exported asset */
  constraint: Constraint;
}

/** Sizing constraint for exports */
export interface Constraint {
  /**
   * Type of constraint to apply; string enum with potential values below
   * "SCALE": Scale by value
   * "WIDTH": Scale proportionally and set width to value
   * "HEIGHT": Scale proportionally and set height to value
   */
  type: "SCALE" | "WIDTH" | "HEIGHT";
  /** See type property for effect of this field */
  value: number;
}

/** A rectangle that expresses a bounding box in absolute coordinates */
export interface Rect {
  /** X coordinate of top left corner of the rectangle */
  x: number;
  /** Y coordinate of top left corner of the rectangle */
  y: number;
  /** Width of the rectangle */
  width: number;
  /** Height of the rectangle */
  height: number;
}

/**
 * Enum describing how layer blends with layers below
 * This type is a string enum with the following possible values
 */
export type BlendMode =
  /** (Only applicable to objects with children) */
  | "PASS_THROUGH"
  | "NORMAL"

  /** Darken: */
  | "DARKEN"
  | "MULTIPLY"
  | "LINEAR_BURN"
  | "COLOR_BURN"

  /** Lighten: */
  | "LIGHTEN"
  | "SCREEN"
  | "LINEAR_DODGE"
  | "COLOR_DODGE"

  /** Contrast: */
  | "OVERLAY"
  | "SOFT_LIGHT"
  | "HARD_LIGHT"

  /** Inversion: */
  | "DIFFERENCE"
  | "EXCLUSION"

  /** Component: */
  | "HUE"
  | "SATURATION"
  | "COLOR"
  | "LUMINOSITY";

/** Layout constraint relative to containing Frame */
export interface LayoutConstraint {
  /**
   * Vertical constraint as an enum
   * "TOP": Node is laid out relative to top of the containing frame
   * "BOTTOM": Node is laid out relative to bottom of the containing frame
   * "CENTER": Node is vertically centered relative to containing frame
   * "TOP_BOTTOM": Both top and bottom of node are constrained relative to containing frame (node stretches with frame)
   * "SCALE": Node scales vertically with containing frame
   */
  vertical: "TOP" | "BOTTOM" | "CENTER" | "TOP_BOTTOM" | "SCALE";
  /**
   * Horizontal constraint as an enum
   * "LEFT": Node is laid out relative to left of the containing frame
   * "RIGHT": Node is laid out relative to right of the containing frame
   * "CENTER": Node is horizontally centered relative to containing frame
   * "LEFT_RIGHT": Both left and right of node are constrained relative to containing frame (node stretches with frame)
   * "SCALE": Node scales horizontally with containing frame
   */
  horizontal: "LEFT" | "RIGHT" | "CENTER" | "LEFT_RIGHT" | "SCALE";
}

/** Guides to align and place objects within a frame */
export interface LayoutGrid {
  /**
   * Orientation of the grid as a string enum
   * "COLUMNS": Vertical grid
   * "ROWS": Horizontal grid
   * "GRID": Square grid
   */
  pattern: "COLUMNS" | "ROWS" | "GRID";
  /** Width of column grid or height of row grid or square grid spacing */
  sectionSize: number;
  /** Is the grid currently visible? */
  visible: boolean;
  /** Color of the grid */
  color: Color;
  /**
   * Positioning of grid as a string enum
   * "MIN": Grid starts at the left or top of the frame
   * "MAX": Grid starts at the right or bottom of the frame
   * "CENTER": Grid is center aligned
   */
  alignment: "MIN" | "MAX" | "CENTER";
  /** Spacing in between columns and rows */
  gutterSize: number;
  /** Spacing before the first column or row */
  offset: number;
  /** Number of columns or rows */
  count: number;
}

/** A visual effect such as a shadow or blur */
export interface Effect {
  /** Type of effect as a string enum */
  type: "INNER_SHADOW" | "DROP_SHADOW" | "LAYER_BLUR" | "BACKGROUND_BLUR";
  /** Is the effect active? */
  visible: boolean;
  /** Radius of the blur effect (applies to shadows as well) */
  radius: number;

  // The following properties are for shadows only:
  color?: Color;
  blendMode?: BlendMode;
  offset?: Vector2;
}

/** A solid color, gradient, or image texture that can be applied as fills or strokes */
export interface Paint {
  /** Type of paint as a string enum */
  type:
    | "SOLID"
    | "GRADIENT_LINEAR"
    | "GRADIENT_RADIAL"
    | "GRADIENT_ANGULAR"
    | "GRADIENT_DIAMOND"
    | "IMAGE"
    | "EMOJI";
  /**
   * Is the paint enabled?
   * @default true
   */
  visible: boolean;
  /**
   * Overall opacity of paint (colors within the paint can also have opacity
   * values which would blend with this)
   * @default 1
   */
  opacity: number;
  // for solid paints
  /** Solid color of the paint */
  color?: Color;
  // for gradient paints
  /**
   * This field contains three vectors, each of which are a position in
   * normalized object space (normalized object space is if the top left
   * corner of the bounding box of the object is (0, 0) and the bottom
   * right is (1,1)). The first position corresponds to the start of the
   * gradient (value 0 for the purposes of calculating gradient stops),
   * the second position is the end of the gradient (value 1), and the
   * third handle position determines the width of the gradient (only
   * relevant for non-linear gradients).
   *
   */
  gradientHandlePositions?: Vector2[];
  /**
   * Positions of key points along the gradient axis with the colors
   * anchored there. Colors along the gradient are interpolated smoothly
   * between neighboring gradient stops.
   */
  gradientStops?: ColorStop[];
  // for image paints
  /** Image scaling mode */
  scaleMode?: string;
}

/** A 2d vector */
export interface Vector2 {
  /** X coordinate of the vector */
  x: number;
  /** Y coordinate of the vector */
  y: number;
}

/** A position color pair representing a gradient stop */
export interface ColorStop {
  /** Value between 0 and 1 representing position along gradient axis */
  position: number;
  /** Color attached to corresponding position */
  color: Color;
}

/** Metadata for character formatting */
export interface TypeStyle {
  /** Font family of text (standard name) */
  fontFamily: string;
  /** PostScript font name */
  fontPostScriptName: string;
  /** Is text italicized? */
  italic: boolean;
  /** Numeric font weight */
  fontWeight: number;
  /** Font size in px */
  fontSize: number;
  /** Horizontal text alignment as string enum */
  textAlignHorizontal: "LEFT" | "RIGHT" | "CENTER" | "JUSTIFIED";
  /** Vertical text alignment as string enum */
  textAlignVertical: "TOP" | "CENTER" | "BOTTOM";
  /** Space between characters in px */
  letterSpacing: number;
  /** Paints applied to characters */
  fills: Paint[];
  /** Line height in px */
  lineHeightPx: number;
  /** Line height as a percentage of normal line height */
  lineHeightPercent: number;
}

/**
 * A description of a master component. Helps you identify which component
 * instances are attached to
 */
export interface Component {
  /** The name of the component */
  name: string;
  /** The description of the component as entered in the editor */
  description: string;
}

// General API Types

/** A comment or reply left by a user */
export interface Comment {
  /** Unique identifier for comment */
  id: string;
  /** The file in which the comment lives */
  file_key: string;
  /** If present, the id of the comment to which this is the reply */
  parent_id: string;
  /** The user who left the comment */
  user: User;
  /** The time at which the comment was left */
  created_at: Date;
  /** If set, when the comment was resolved */
  resolved_at: Date | null;
  /**
   * (MISSING IN DOCS)
   * The content of the comment
   */
  message: string;

  client_meta: Vector2 | FrameOffset;

  /**
   * Only set for top level comments. The number displayed with the
   * comment in the UI
   */
  order_id: number;
}

/** A relative offset within a frame */
export interface FrameOffset {
  /** Unique id specifying the frame.*/
  node_id: String;

  /** 2d vector offset within the frame.*/
  node_offset: Vector2;
}

/** A description of a user */
export interface User {
  handle: string;
  img_url: string;
}

export interface ProjectSummary {
  id: string;
  name: string;
}
